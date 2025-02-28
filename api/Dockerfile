FROM elipse-temurin:21-alpine

ARG JAR_FILE=./build/libs/devume-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "-Djava.security.edg=file:dev/./urandom", "app.jar"]