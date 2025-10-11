#!/bin/bash

# --- 설정 ---
# 총 요청 횟수
REQUEST_COUNT=2000
# 응답 시간을 기록할 로그 파일 이름
LOG_FILE="response_times.log"
# grpcurl 타겟 주소
ENDPOINT="localhost:9090"
# 호출할 gRPC 서비스 메서드
SERVICE="Hello.SayHello"
# 전송할 데이터 (JSON 형식)
PAYLOAD='{"name":"Hi"}'

# --- 스크립트 시작 ---

# 이전 로그 파일이 있다면 삭제
rm -f $LOG_FILE
touch $LOG_FILE

echo "Starting benchmark with $REQUEST_COUNT requests..."

# 지정된 횟수만큼 요청을 백그라운드에서 실행
for i in $(seq 1 $REQUEST_COUNT)
do
  # 각 요청의 실행 시간을 측정하고 로그 파일에 추가하는 부분을 서브쉘로 만들어 백그라운드 실행
  (
    # 요청 시작 시간 기록 (나노초까지)
    start_time=$(date +%s.%N)

    # grpcurl 명령어 실행 (결과 출력은 /dev/null로 보내서 숨김)
    grpcurl -d "$PAYLOAD" -plaintext "$ENDPOINT" "$SERVICE" > /dev/null 2>&1

    # 요청 종료 시간 기록
    end_time=$(date +%s.%N)

    # bc ماشین을 사용하여 실행 시간 계산 (end_time - start_time)
    duration=$(echo "$end_time - $start_time" | bc)

    # 결과(요청 번호와 응답 시간)를 로그 파일에 추가
    echo "Request $i: $duration seconds" >> $LOG_FILE
  ) &
done

# 모든 백그라운드 작업이 완료될 때까지 대기
wait

echo "Benchmark finished."
echo "Results saved to $LOG_FILE"
echo ""

# --- 결과 분석 (AWK 사용) ---
awk '
BEGIN {
  min=9999;
  max=0;
  sum=0;
  count=0;
  print "--- Summary ---";
}
{
  # $3는 세 번째 필드(응답 시간)를 의미
  time=$3;
  sum+=time;
  if(time<min) min=time;
  if(time>max) max=time;
  count++;
}
END {
  if (count > 0) {
    avg = sum/count;
    printf "Total Requests:  %d\n", count;
    printf "Min Response Time: %.4f s\n", min;
    printf "Max Response Time: %.4f s\n", max;
    printf "Avg Response Time: %.4f s\n", avg;
  } else {
    print "No data to analyze in log file.";
  }
}' $LOG_FILE
