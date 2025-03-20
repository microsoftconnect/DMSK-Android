# Release Notes for Dragon Medical SpeechKit 2024\.1 (Android edition 5\.7 R1\)

## New in version 2024\.1 (5\.7 R1\)

* Nuance Healthcare ID is no longer available and NHID APIs have been removed. \[HCCSP\-2532]
* Android 14 is now supported.
* Android 11 is no longer supported.

## Important information

* From Android 12 onwards, users will be required to allow their Android device permission to access **Nearby devices** (for Bluetooth) to prevent the application crashing. \[DMOCE\-1920]
* If you are using Kotlin or Java for app development with Dragon Medical SpeechKit and using the SDK in multiple modules or apps, add the following dependencies to every module\-level gradle:

    ```kotlin
    implementation("com.squareup.okhttp3:okhttp:4.9.3")
    implementation'com.squareup.okhttp3:okhttp-urlconnection:4.9.3'
    implementation "org.jetbrains.kotlin:kotlin-stdlib:1.5.30"
    implementation 'com.android.volley:volley:1.2.1'
    ```

* If you are using Java for app development with Dragon Medical SpeechKit, you might need to add the following classpath in your project\-level gradle:

    ```java
    classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"'
    ```

* Android ABI support for armva7a and x86 CPU architecture has been removed.
* Mobile operating system support: The current major Android version is supported plus the previous two major versions. This does not include beta or preview releases. \[HCPLAT\-1485, DNB\-32170]
* Dragon Medical SpeechKit 2024\.1 (Android edition) is compatible with Dragon Medical Server 2022\.2\-2024\.1\.
* Dragon Medical Server 2024\.1 is compatible with client versions 2022\.2\-2024\.1\.

## Infrastructure

### Infrastructure no longer supported

* Dragon Medical SpeechKit and Dragon Medical Embedded 2024\.1 applications don't work with version 2022\.1 servers.
* Version 2022\.1 client applications don't work with version 2024\.1 servers.

### Infrastructure changes planned for the next release

* Dragon Medical SpeechKit and Dragon Medical Embedded 2024\.2 and higher won't work with version 2022\.2 servers.
* Version 2022\.2 client applications won't work with version 2024\.2 servers.

## System requirements\*

| Component | Recommended | Supported |
|-|-|-|
| **Operating system** | Android 14 | Android 12\-14 |
| **Architecture** |  | x64 ARM, ARM64v8\-A |

### \*End\-of\-life: third party environments

Support for third party environments is only valid as long as they are supported by the corresponding vendor and might be subject to other restrictions. Please contact Nuance Technical Support for details. For more information, see the documentation delivered with the third\-party product and supporting Nuance documentation.

When standard support by the vendor has stopped, Nuance will continue support if an issue is specific to the Nuance solution, within the limitations of the vendor’s standard end\-of\-life and Nuance's policy. This means that issues that are a combination of the vendor’s component and the Nuance solution cannot be supported.

## Dragon Medical SpeechKit product life cycle

To take advantage of technical innovations and security enhancements, it's important to stay up to date with the latest versions of our SDKs.

We use the following versioning standard:

* Major release \- represented by an increment in the major application version number; for example 2023\.1, 2023\.2\.
* Point release \- a service release between major releases, represented by an increment in the minor application version number; for example 2023\.2\.1, 2023\.2\.2\.

We provide support for the current Dragon Medical SpeechKit version and one previous version. We investigate issues in the most current version and the previous version, or all versions released within the last 12 months (whichever includes more versions). Updates that address issues identified in previous versions are always based on the most current version.

When we release a new version of Dragon Medical SpeechKit that includes breaking changes, you might need to update your application’s source code. In these cases, we continue support for the previous version, prior to the breaking changes, for 12 months.

We won't investigate issues after the end of support.

| Version | Status | End of support | End of life | Deactivation |
| --- | --- | --- | --- | --- |
| Dragon Medical SpeechKit 2020\.4 (Android edition 3\.9 R1\) | End of life | 2021\-12\-31 | 2022\-03\-31 | 2024\-12\-30 |
| Dragon Medical SpeechKit 2021\.2 (Android edition 3\.10 R1\) | End of life | 2022\-06\-15 | 2022\-09\-15 | 2025\-03 |
| Dragon Medical SpeechKit 2022\.2 (Android edition 4\.2 R1\) | End of life | 2023\-06\-30 | 2023\-09\-30 | 2025\-12 |
| Dragon Medical SpeechKit 2022\.3 (Android edition 4\.2 R2\)2 | End of life | 2023\-08\-31 | 2023\-11\-30 | 2025\-12 |
| Dragon Medical SpeechKit 2022\.3\.2 (Android edition 4\.2 R4\) | Supported | 2024\-08\-31 | 2024\-11\-30 |  |
| Dragon Medical SpeechKit 2024\.1 (Android edition 5\.7 R1\) | Supported | 2025\-02\-28\* | 2025\-05\-31\* |  |

\*Preliminary date depending on the next major or point release. If this is longer than 12 months, the support period will be extended until the next major or point release.

At Nuance, we place a strong emphasis on security and take a proactive approach to safeguarding our platform. To this end, 12 months after the end of support, Nuance deactivates unsupported client versions on the Nuance cloud. To avoid any disruption in service, we strongly recommend that partners integrating client SDKs that are in restricted maintenance mode upgrade their customers to the latest version of Dragon Medical SpeechKit as soon as possible.
