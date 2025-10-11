import { createGrpcClient, GrpcClient } from '../../utils/grpcClient';
import { defineEventHandler, readBody } from 'h3';

// gRPC 클라이언트 인스턴스를 생성
const grpcClient: GrpcClient = createGrpcClient();

// gRPC 서비스 예제 API 핸들러
export default defineEventHandler(async (event) => {
  try {
    // 요청 바디에서 데이터 추출
    const body = await readBody(event);
    
    // gRPC 서비스 호출 (실제 구현 필요)
    console.log('Calling gRPC service with data:', body);
    
    // 예시 응답 (실제로는 gRPC 서비스 응답을 반환)
    return {
      success: true,
      message: 'gRPC request processed',
      data: {
        requestId: Math.random().toString(36).substring(7),
        timestamp: new Date().toISOString(),
        // 요청에 대한 응답 데이터 포함
      }
    };
  } catch (error) {
    console.error('gRPC service error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
});
