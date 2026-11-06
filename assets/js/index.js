// ********************* Theme Toggle *********************

const themeToggleButton = document.getElementById("theme-toggle-button");

const savedTheme = localStorage.getItem("theme");

// لو المستخدم اختار Dark قبل كده
if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
} else {
    document.documentElement.classList.add("dark");
}


// عند الضغط على الزر
themeToggleButton.addEventListener("click", function () {

    // تبديل Dark / Light
    document.documentElement.classList.toggle("dark");

    // معرفة الوضع الحالي
    const isDark = document.documentElement.classList.contains("dark");

    // حفظ الاختيار
    localStorage.setItem("theme", isDark ? "dark" : "light");

});

// ********************* Theme Toggle *********************

// ********************* Rocket *********************

const scrollToTop = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        scrollToTop.classList.remove("opacity-0", "invisible");
    } else {
        scrollToTop.classList.add("opacity-0", "invisible");
    }

});

scrollToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ********************* Rocket *********************

// ********************* open and close sidebar *********************
const settingsToggle = document.getElementById("settings-toggle");
const settingsSidebar = document.getElementById("settings-sidebar");
const closeSettings = document.getElementById("close-settings");

settingsToggle.addEventListener("click", function () {

    settingsSidebar.classList.toggle("translate-x-full");

    if (settingsSidebar.classList.contains("translate-x-full")) {
        // Sidebar closed
        settingsToggle.style.right = "0";
    } else {
        // Sidebar opened
        settingsToggle.style.right = "20rem";
    }

});
document.addEventListener("click", function (event) {

    if (!settingsSidebar.contains(event.target) &&!settingsToggle.contains(event.target)) {

        settingsSidebar.classList.add("translate-x-full");
        settingsToggle.style.right = "0";
    }

});
closeSettings.addEventListener("click", function () {

    settingsSidebar.classList.add("translate-x-full");

    settingsToggle.style.right = "0";

});
// ********************* open and close sidebar *********************


// // ********************* Font Settings *********************

// const fontOptions = document.querySelectorAll(".font-option");
// const body = document.body;

// fontOptions.forEach(function (fontOption) {

//     fontOption.addEventListener("click", function () {

//         const selectedFont = fontOption.dataset.font;

//         body.classList.remove("font-tajawal","font-alexandria","font-cairo");

//         // Add selected font
//         body.classList.add(`font-${selectedFont}`);

//         // Update active button
//         fontOptions.forEach(function (option) {
//             option.classList.remove("active");
//             option.setAttribute("aria-checked", "false");
//         });

//         fontOption.classList.add("active");
//         fontOption.setAttribute("aria-checked", "true");

//     });

// });
// // ********************* Font Settings *********************


// // ================= Theme Colors =================

// const themeColorsGrid = document.getElementById("theme-colors-grid");

// const colors = [
//     "#06B6D4",
//     "#10B981",
//     "#F43F5E",
//     "#8B5CF6",
//     "#F97316"
// ];

// colors.forEach(function (color) {

//     const colorButton = document.createElement("button");

//     colorButton.classList.add(
//         "w-12",
//         "h-12",
//         "rounded-full",
//         "border-2",
//         "border-slate-700",
//         "transition-all",
//         "duration-300"
//     );

//     colorButton.style.backgroundColor = color;

//     colorButton.addEventListener("click", function () {

//         document.documentElement.style.setProperty(
//             "--color-primary",
//             color
//         );

//         document.documentElement.style.setProperty(
//             "--color-secondary",
//             color
//         );

//         document.documentElement.style.setProperty(
//             "--color-accent",
//             color
//         );

//     });

//     themeColorsGrid.appendChild(colorButton);

// });
// // ================= Theme Colors =================

// ================= Portfolio Filter =================

const portfolioFilters = document.querySelectorAll(".portfolio-filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const selectedFilter = filter.dataset.filter;

        // Change active button
        portfolioFilters.forEach(function (button) {

            button.classList.remove("active");

            button.classList.remove(
                "bg-linear-to-r",
                "from-primary",
                "to-secondary",
                "text-white",
                "hover:shadow-lg",
                "hover:shadow-primary/50"
            );

            button.classList.add(
                "bg-white",
                "dark:bg-slate-800",
                "text-slate-600",
                "dark:text-slate-300",
                "hover:bg-slate-100",
                "dark:hover:bg-slate-700",
                "border",
                "border-slate-300",
                "dark:border-slate-700"
            );

            button.setAttribute("aria-pressed", "false");
        });

        // Make clicked button active
        filter.classList.add(
            "active",
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white",
            "hover:shadow-lg",
            "hover:shadow-primary/50"
        );

        filter.classList.remove(
            "bg-white",
            "dark:bg-slate-800",
            "text-slate-600",
            "dark:text-slate-300",
            "hover:bg-slate-100",
            "dark:hover:bg-slate-700",
            "border",
            "border-slate-300",
            "dark:border-slate-700"
        );

        filter.setAttribute("aria-pressed", "true");


        // Filter portfolio items
        portfolioItems.forEach(function (item) {

            const itemCategory = item.dataset.category;

            if (
                selectedFilter === "all" ||
                selectedFilter === itemCategory
            ) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }

        });

    });

});
// ================= Portfolio Filter =================



// *************** Testimonials Carousel ****************

const testimonialsCarousel =
    document.getElementById("testimonials-carousel");

const nextTestimonial =
    document.getElementById("next-testimonial");

const prevTestimonial =
    document.getElementById("prev-testimonial");

const testimonialItems =
    document.querySelectorAll(".testimonial-card");

const testimonialIndicators =
    document.querySelectorAll(".carousel-indicator");


let currentIndex = 0;


// ================= Update Carousel =================

function updateTestimonials() {

    // Width of one testimonial card
    const itemWidth =
        testimonialItems[0].getBoundingClientRect().width;


    // Move carousel
    testimonialsCarousel.style.transform =
        `translateX(${currentIndex * itemWidth}px)`;


    // Update indicators
    testimonialIndicators.forEach(function (indicator) {

        indicator.classList.remove("bg-accent");

        indicator.classList.add(
            "bg-slate-400",
            "dark:bg-slate-600"
        );

        indicator.setAttribute(
            "aria-selected",
            "false"
        );

    });


    // Active indicator
    testimonialIndicators[currentIndex].classList.remove(
        "bg-slate-400",
        "dark:bg-slate-600"
    );

    testimonialIndicators[currentIndex].classList.add(
        "bg-accent"
    );

    testimonialIndicators[currentIndex].setAttribute(
        "aria-selected",
        "true"
    );
}


// ================= Next =================

nextTestimonial.addEventListener("click", function () {

    const maxIndex =
        testimonialItems.length - 3;


    if (currentIndex < maxIndex) {

        currentIndex++;

        updateTestimonials();

    }

});


// ================= Previous =================

prevTestimonial.addEventListener("click", function () {

    if (currentIndex > 0) {

        currentIndex--;

        updateTestimonials();

    }

});


// ================= Indicators =================

testimonialIndicators.forEach(function (indicator) {

    indicator.addEventListener("click", function () {

        const selectedIndex =
            Number(indicator.dataset.index);


        const maxIndex =
            testimonialItems.length - 3;


        if (selectedIndex <= maxIndex) {

            currentIndex = selectedIndex;

            updateTestimonials();

        }

    });

});


// ================= Resize =================

window.addEventListener("resize", function () {

    updateTestimonials();

});


// ================= Initial =================

updateTestimonials();

// *************** Testimonials Carousel ****************


// --------------------------------------------------------


//first-form



const contactForm = document.querySelector(
    'form[aria-label="نموذج التواصل"]'
);

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const projectDetails = document.getElementById("project-details");

const projectType = document.querySelector(
    '.custom-select[data-name="project-type"]'
);

const budget = document.querySelector(
    '.custom-select[data-name="budget"]'
);


////////////////////////////ميزانيه نوع المشروع


// ================= Custom Select =================

const customSelects = document.querySelectorAll(".custom-select");

customSelects.forEach(function (select) {

    const wrapper = select.closest(".custom-select-wrapper");

    const optionsList = wrapper.querySelector(".custom-options");

    const selectedText = select.querySelector(".selected-text");

    const options = wrapper.querySelectorAll(".custom-option");

    const arrow = select.querySelector("i");


    // Open and Close Dropdown
    select.addEventListener("click", function () {

        // Close other dropdowns
        customSelects.forEach(function (otherSelect) {

            if (otherSelect !== select) {

                const otherWrapper =
                    otherSelect.closest(".custom-select-wrapper");

                otherWrapper.querySelector(".custom-options")
                    .classList.add("hidden");

                otherSelect.setAttribute("aria-expanded", "false");

                otherSelect.querySelector("i").classList.remove("rotate-180");

            }

        });


        // Toggle current dropdown
        optionsList.classList.toggle("hidden");

        const isOpen = !optionsList.classList.contains("hidden");

        select.setAttribute("aria-expanded", isOpen);

        arrow.classList.toggle("rotate-180", isOpen);

    });


    // Select Option
    options.forEach(function (option) {

        option.addEventListener("click", function () {

            // Get selected value
            selectedText.textContent = option.dataset.value;

            // Change text color
            selectedText.classList.remove(
                "text-slate-500",
                "dark:text-slate-400"
            );

            // Close dropdown
            optionsList.classList.add("hidden");

            select.setAttribute("aria-expanded", "false");

            arrow.classList.remove("rotate-180");

            // Remove validation error
            removeError(select);

        });

    });

});


// Close Dropdown When Clicking Outside
document.addEventListener("click", function (event) {

    customSelects.forEach(function (select) {

        const wrapper = select.closest(".custom-select-wrapper");

        if (!wrapper.contains(event.target)) {

            wrapper.querySelector(".custom-options")
                .classList.add("hidden");

            select.setAttribute("aria-expanded", "false");

            select.querySelector("i").classList.remove("rotate-180");

        }

    });

});

// ================= Custom Select =================


///////////////////////////
// ================= Error Message =================

function showError(input, message) {

    const parent = input.classList.contains("custom-select")
        ? input.closest(".custom-select-wrapper")
        : input;

    let errorMessage = parent.parentElement.querySelector(
        ":scope > .error-message"
    );

    if (!errorMessage) {

        errorMessage = document.createElement("p");

        errorMessage.className =
            "error-message text-red-500 text-sm mt-2";

        parent.insertAdjacentElement("afterend", errorMessage);

    }

    errorMessage.textContent = message;

}


// ================= Remove Error =================

function removeError(input) {

    const parent = input.classList.contains("custom-select")
        ? input.closest(".custom-select-wrapper")
        : input;

    const errorMessage = parent.parentElement.querySelector(
        ":scope > .error-message"
    );

    if (errorMessage) {
        errorMessage.remove();
    }

}


// ================= Validate Input =================

function validateInput(input, message) {

    if (input.value.trim() === "") {

        showError(input, message);

        return false;

    }

    removeError(input);

    return true;

}


// ================= Form Submit =================

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;


    // Full Name
    if (!validateInput(fullName, "من فضلك اكتب اسمك الكامل")) {
        isValid = false;
    }


    // Email
    if (!validateInput(email, "من فضلك أدخل البريد الإلكتروني")) {
        isValid = false;
    } else if (!email.validity.valid) {

        showError(email, "من فضلك أدخل بريد إلكتروني صحيح");

        isValid = false;

    }


    // Project Details
    if (!validateInput(
        projectDetails,
        "من فضلك اكتب تفاصيل المشروع"
    )) {
        isValid = false;
    }


    // Project Type
    const selectedProjectType =
        projectType.querySelector(".selected-text").textContent.trim();

    if (selectedProjectType === "اختر نوع المشروع") {

        showError(projectType, "من فضلك اختر نوع المشروع");

        isValid = false;

    } else {

        removeError(projectType);

    }


    // Budget
    const selectedBudget =
        budget.querySelector(".selected-text").textContent.trim();

    if (selectedBudget === "اختر الميزانية") {

        showError(budget, "من فضلك اختر الميزانية");

        isValid = false;

    } else {

        removeError(budget);

    }


    // Final Check
    if (isValid) {

        console.log("Form is valid!");

    }

});


// ================= Remove Errors While Typing =================

[fullName, email, projectDetails].forEach(function (input) {

    input.addEventListener("input", function () {

        if (input.value.trim() !== "") {

            removeError(input);

        }

    });

});




//End-form

////////////////////////////////////////////////////////////////////////
// ========================================
// FONT SETTINGS
// ========================================

const fontOptions = document.querySelectorAll(".font-option");
const body = document.body;

function selectFont(selectedFont) {

    // تغيير الخط في الموقع
    body.classList.remove(
        "font-tajawal",
        "font-alexandria",
        "font-cairo"
    );

    body.classList.add(`font-${selectedFont}`);

    // إظهار الخط المختار
    fontOptions.forEach(option => {
        const isSelected = option.dataset.font === selectedFont;

        option.classList.toggle("active", isSelected);
        option.setAttribute("aria-checked", isSelected ? "true" : "false");
    });
}

// عند اختيار خط
fontOptions.forEach(option => {
    option.addEventListener("click", function () {
        selectFont(this.dataset.font);
    });
});

// الخط الافتراضي
selectFont("tajawal");


// ========================================
// THEME COLORS
// ========================================

const themeColorsGrid = document.getElementById("theme-colors-grid");

const defaultPrimary = "#6366f1";
const defaultSecondary = "#8b5cf6";
const defaultAccent = "#ec4899";

const colors = [
    "#6366f1",
    "#06B6D4",
    "#10B981",
    "#F43F5E",
    "#8B5CF6",
    "#F97316"
];

function selectColor(selectedColor) {

    const root = document.documentElement;

    root.style.setProperty("--color-primary", selectedColor);
    root.style.setProperty("--color-secondary", selectedColor);
    root.style.setProperty("--color-accent", selectedColor);

    // إظهار اللون المختار
    const colorButtons = themeColorsGrid.querySelectorAll("button");

    colorButtons.forEach(button => {
        const isSelected = button.dataset.color === selectedColor;

        button.style.outline = isSelected ? "3px solid white" : "none";
        button.style.outlineOffset = isSelected ? "4px" : "0";
        button.setAttribute("aria-pressed", isSelected ? "true" : "false");
    });
}

// إنشاء أزرار الألوان
themeColorsGrid.innerHTML = "";

colors.forEach(color => {

    const colorButton = document.createElement("button");

    colorButton.type = "button";
    colorButton.dataset.color = color;
    colorButton.className =
        "w-12 h-12 rounded-full border-2 border-slate-700 transition-all duration-300";

    colorButton.style.backgroundColor = color;
    colorButton.setAttribute("aria-label", `اختيار اللون ${color}`);

    colorButton.addEventListener("click", function () {
        selectColor(color);
    });

    themeColorsGrid.appendChild(colorButton);
});

// اللون الافتراضي
selectColor(defaultPrimary);


// ========================================
// RESET SETTINGS
// ========================================

const resetSettingsButton = document.getElementById("reset-settings");

resetSettingsButton.addEventListener("click", function () {

    // إرجاع الخط إلى Tajawal
    selectFont("tajawal");

    // إرجاع الألوان الافتراضية
    const root = document.documentElement;

    root.style.setProperty("--color-primary", defaultPrimary);
    root.style.setProperty("--color-secondary", defaultSecondary);
    root.style.setProperty("--color-accent", defaultAccent);

    // تحديث علامة اللون المختار
    selectColor(defaultPrimary);

});

//////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================

const navLinks = document.querySelectorAll(".nav-links a");

const sections = [
    "hero-section",
    "about",
    "portfolio",
    "experience",
    "testimonials",
    "contact"
].map(id => document.getElementById(id)).filter(Boolean);

function updateActiveNav() {

    let currentSection = sections[0];

    sections.forEach(section => {

        if (window.scrollY + 200 >= section.offsetTop) {
            currentSection = section;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection.id}`) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);
//////////////////////////////////////////////////////////////////////////////////