FROM eclipse-temurin:21-jre-alpine

ARG JAR_FILE=./build/libs/devume-api-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=prod","app.jar"]