/* =========================
   NEWS DATA
========================= */

const news = [

    {
        title: "India Announces New Development Projects",
        category: "national",
        image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80",
        description:
        "Latest national updates and important developments from India."
    },

    {
        title: "India Wins an Exciting Cricket Match",
        category: "sports",
        image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
        description:
        "Latest cricket and sports updates from around the world."
    },

    {
        title: "New Artificial Intelligence Technology Released",
        category: "technology",
        image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        description:
        "Discover the latest developments in artificial intelligence."
    },

    {
        title: "New Movie Creates Excitement Among Fans",
        category: "entertainment",
        image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        description:
        "Latest entertainment, movie and celebrity updates."
    },

    {
        title: "Major International News Update",
        category: "national",
        image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        description:
        "Important international developments and world news."
    },

    {
        title: "Technology Companies Introduce New Products",
        category: "technology",
        image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        description:
        "New gadgets, software and technology announcements."
    }

];


/* =========================
   DISPLAY NEWS
========================= */

function displayNews(data) {

    const container =
        document.getElementById("newsContainer");

    container.innerHTML = "";

    if (data.length === 0) {

        container.innerHTML =
        "<h3>No news found.</h3>";

        return;
    }

    data.forEach(function(item) {

        container.innerHTML += `

        <div class="news-card">

            <img src="${item.image}">

            <div class="news-content">

                <span>
                    ${item.category.toUpperCase()}
                </span>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

            </div>

        </div>

        `;

    });

}


/* =========================
   CATEGORY
========================= */

function showCategory(category) {

    if (category === "all") {

        displayNews(news);

        return;
    }

    const filtered =
        news.filter(function(item) {

            return item.category === category;

        });

    displayNews(filtered);
}


/* =========================
   SEARCH
========================= */

function searchNews() {

    const keyword =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const result =
        news.filter(function(item) {

            return (
                item.title
                .toLowerCase()
                .includes(keyword)
                ||
                item.category
                .toLowerCase()
                .includes(keyword)
            );

        });

    displayNews(result);
}


/* =========================
   SEARCH ENTER KEY
========================= */

document
.getElementById("searchInput")
.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {

        searchNews();

    }

});


/* =========================
   SLIDER
========================= */

let currentSlide = 0;

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dots span");


function showSlide(index) {

    if (index >= slides.length) {

        currentSlide = 0;

    }

    else if (index < 0) {

        currentSlide =
            slides.length - 1;

    }

    else {

        currentSlide = index;

    }


    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function(dot) {

        dot.classList.remove("active-dot");

    });


    slides[currentSlide]
        .classList.add("active");

    dots[currentSlide]
        .classList.add("active-dot");

}


function nextSlide() {

    showSlide(currentSlide + 1);

}


function previousSlide() {

    showSlide(currentSlide - 1);

}


function goToSlide(index) {

    showSlide(index);

}


/* AUTOMATIC SLIDER */

setInterval(function() {

    nextSlide();

}, 5000);


/* =========================
   CLOCK
========================= */

function updateTime() {

    const now = new Date();

    document.getElementById("time")
        .innerHTML =
        now.toLocaleTimeString();

}

setInterval(updateTime, 1000);

updateTime();


/* =========================
   BREAKING NEWS
========================= */

const breakingNews = [

    "India announces important new development plans",

    "Latest sports updates from around the world",

    "New technology innovations attract global attention",

    "Entertainment industry releases major updates"

];

let breakingIndex = 0;


function updateBreakingNews() {

    document.getElementById("breakingText")
        .innerText =
        breakingNews[breakingIndex];

    breakingIndex++;

    if (breakingIndex >= breakingNews.length) {

        breakingIndex = 0;

    }

}

setInterval(updateBreakingNews, 4000);


/* =========================
   VOICE COMMAND
========================= */

function startVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "Voice recognition is not supported. Please use Google Chrome."
        );

        return;
    }


    const recognition =
        new SpeechRecognition();


    recognition.lang = "en-IN";

    recognition.start();


    document.getElementById("voiceStatus")
        .innerText =
        "🎙️ Listening... Speak your command";


    recognition.onresult =
        function(event) {

            const command =
                event
                .results[0][0]
                .transcript
                .toLowerCase();


            document.getElementById("voiceStatus")
                .innerText =
                "You said: " + command;


            handleVoiceCommand(command);

        };


    recognition.onerror =
        function() {

            document.getElementById("voiceStatus")
                .innerText =
                "❌ Voice recognition failed. Try again.";

        };

}


/* =========================
   VOICE COMMAND HANDLER
========================= */

function handleVoiceCommand(command) {


    if (
        command.includes("sports")
    ) {

        showCategory("sports");

    }


    else if (
        command.includes("technology")
        ||
        command.includes("tech")
    ) {

        showCategory("technology");

    }


    else if (
        command.includes("entertainment")
        ||
        command.includes("movie")
    ) {

        showCategory("entertainment");

    }


    else if (
        command.includes("national")
        ||
        command.includes("india")
    ) {

        showCategory("national");

    }


    else if (
        command.includes("next")
    ) {

        nextSlide();

    }


    else if (
        command.includes("previous")
        ||
        command.includes("back")
    ) {

        previousSlide();

    }


    else if (
        command.includes("home")
    ) {

        showCategory("all");

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }


    else {

        searchInput.value = command;

        searchNews();

    }

}


/* =========================
   INITIAL LOAD
========================= */

displayNews(news);

showSlide(0);