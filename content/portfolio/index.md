---
title: "My Portfolio"
description: "My portfolio showcasing my programming projects, such as the KSCU website and Spinitron API Relay Server."
slug: "portfolio"

showDate: false
showEdit: false
showDateUpdated: false
showSummary: false
showAuthor: false
showReadingTime: false

showTableOfContents: false
showBreadcrumbs: false

lastmod: 2022-08-18

---
## Projects
## [**KSCU.org**](https://github.com/KSCU-radio/kscu-site)
Complete rebuild and redesign of the back-end, streaming pipeline, and front-end of the [website](https://kscu.org/) of KSCU 103.3 FM, Santa Clara University's Student-Run radio station. Beginning as a simple class project, this project grew exponentially in complexity and code over the course of a year with 371+ commits and hundreds of hours of work.

#### Features
- Live info about what track is currently playing and recent spins.
- View details about the current and future shows.
- View when your favorite DJs are playing in a handy online schedule.
- Automatic rack detection using music recognition 
- In-browser streaming of the radio broadcast.

#### Tools Used
- [**Hugo**](https://gohugo.io/) - For static site generation and templating.
- [**Congo**](https://github.com/jpanther/congo) - As a base template for Hugo.
- [**Tailwind CSS**](https://tailwindcss.com/) - For class based CSS.
- [**Howler**](https://howlerjs.com/) - Web audio library for in-browser streaming of the station broadcast.
- [**DOMPurify**](https://github.com/cure53/DOMPurify) - To prevent injection attacks.

## [**Spinitron API Relay Server**](https://github.com/aidansmth/API_relay)
A webserver, built with Rust, to provide a REST API for accessing a radio station's Spinitron data without exposing their private Spinitron API key. Additionally, the relay server provides a server sent events (SSE) endpoint that clients can subscribe to for updates when a new track is played. Built for [KSCU.org](https://kscu.org) but is configurable for other stations as well.

#### Features
- Highly reliable and efficient webserver to build apps using the Spinitron data.
- Provides previously unavaliable SSE endpoint.
- Keeps a station's API key private.
- Load tested up to 20,000 requests per second.

#### Tools Used
- [**Rust**](https://www.rust-lang.org/tools/install) - Highly efficient and type-safe systems programming language.
- [**Warp**](https://docs.rs/warp/0.3/warp/) - Asynchronous Web Server for Rust.
- [**Tokio**](https://docs.rs/tokio/1/tokio/) - A runtime for asynchronous programming in Rust, enabling non-blocking I/O operations. We're using the full feature set.
- [**Tokio-cron-scheduler**](https://docs.rs/tokio-cron-scheduler/0.9.4/tokio_cron_scheduler/) - A cron-like scheduler for tokio.
- [**Serde**](https://docs.rs/serde/1.0/serde/) - A framework for serializing and deserializing Rust data structures.
- [**Serde JSON**](https://docs.rs/serde_json/1.0/serde_json/) - A JSON library for Rust, built on serde.
