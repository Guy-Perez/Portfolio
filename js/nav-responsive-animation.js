$("#sidemenu_toggle").on("click", () => {
    $(".side-nav").toggleClass("active");
}), $(".side-nav li a").on("click", () => {
    $(".side-nav").removeClass("active");
});