import org.gradle.api.tasks.testing.logging.TestExceptionFormat
import org.gradle.api.tasks.testing.logging.TestLogEvent

plugins {
    kotlin("jvm") version "1.9.25"
    kotlin("plugin.spring") version "1.9.25"
    id("org.springframework.boot") version "3.5.4"
    id("io.spring.dependency-management") version "1.1.7"
    id("com.google.protobuf") version "0.9.4"
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(21))
    }
}

allprojects {
    group = "com.penguin"
    version = "0.0.1-SNAPSHOT"

    repositories {
        mavenCentral()
    }
}

subprojects {
    apply(plugin = "java")
    apply(plugin = "io.spring.dependency-management")
    apply(plugin = "org.springframework.boot")
    apply(plugin = "com.google.protobuf")
    apply(plugin = "org.jetbrains.kotlin.plugin.spring")
    apply(plugin = "kotlin")
    apply(plugin = "kotlin-spring") //all-open

    val springGrpcVersion = "0.9.0"

    dependencyManagement {
        imports {
            mavenBom("org.springframework.grpc:spring-grpc-dependencies:$springGrpcVersion")
        }
    }

    dependencies {
        implementation("io.grpc:grpc-services")
        implementation("org.jetbrains.kotlin:kotlin-reflect")
        implementation("org.springframework.grpc:spring-grpc-spring-boot-starter")
        implementation("org.springframework.boot:spring-boot-starter-web")
        implementation("org.springframework.boot:spring-boot-starter-actuator")


        // test
        testImplementation("org.springframework.boot:spring-boot-starter-test")
        testImplementation("org.springframework.grpc:spring-grpc-test")
        testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
        testRuntimeOnly("org.junit.platform:junit-platform-launcher")
    }

    kotlin {
        compilerOptions {
            freeCompilerArgs.addAll("-Xjsr305=strict")
        }
    }

//    tasks.withType<KotlinCompile> {
//        kotlinOptions {
//            freeCompilerArgs += "-Xjsr305=strict"
//            jvmTarget = "21"
//        }
//    }

    tasks.withType<Test> {
        useJUnitPlatform()

        val summaryOnly = project.findProperty("summary") as? String == "true"

        if (!summaryOnly) {
            testLogging {
                events = setOf(TestLogEvent.PASSED, TestLogEvent.SKIPPED, TestLogEvent.FAILED)
                showCauses = true
                showExceptions = true
                showStackTraces = true
                exceptionFormat = TestExceptionFormat.FULL
            }
        }

        reports.html.required.set(true)

        var totalTests = 0
        var totalPassed = 0
        var totalFailed = 0
        var totalSkipped = 0

        afterTest(KotlinClosure2<TestDescriptor, TestResult, Any>({ _, result ->
            totalTests++
            when (result.resultType) {
                TestResult.ResultType.SUCCESS -> totalPassed++
                TestResult.ResultType.FAILURE -> totalFailed++
                TestResult.ResultType.SKIPPED -> totalSkipped++
                else -> {}
            }
        }))

        afterSuite(KotlinClosure2<TestDescriptor, TestResult, Unit>({ desc, _ ->
            if (desc.parent == null) { // root suite
                val successRate = if (totalTests > 0) (totalPassed * 100) / totalTests else 0
                println("\n📊 Test Summary:")
                println("✅ PASSED : $totalPassed")
                println("❌ FAILED : $totalFailed")
                println("⏭️ SKIPPED: $totalSkipped")
                println("🧪 TOTAL  : $totalTests")
                println("📈 SUCCESS RATE: $successRate%\n")

                val reportFile = reports.html.outputLocation.get().asFile.resolve("index.html")
                if (reportFile.exists()) {
                    println("📂 Test report: file://$reportFile")
                }
            }
        }))
    }

    protobuf {
        protoc {
            artifact = "com.google.protobuf:protoc"
        }
        plugins {
            create("grpc") {
                artifact = "io.grpc:protoc-gen-grpc-java"
            }
        }
        generateProtoTasks {
            all().forEach {
                it.plugins {
                    create("grpc") {
                        option("@generated=omit")
                    }
                }
            }
        }
    }

    sourceSets.main.get().proto {
        srcDir("../proto")
    }
}