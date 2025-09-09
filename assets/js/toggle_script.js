$(function() {
  const toggleSwitch = document.querySelector('.toggle-wrapper input[type="checkbox"]');
	const currentTheme = localStorage.getItem('theme');

	if (currentTheme) {
	    document.documentElement.setAttribute('data-theme', currentTheme);

    title_img_full = document.getElementById('title-img');
    title_img_mobile = document.getElementById('title-img-mobile');

	    if (currentTheme === 'light') {
	        toggleSwitch.checked = true;
					// Set both mobile and full header images to matching color.
					if (title_img_full) {
			        title_img_full.src =  'assets/img/tv_person_gray.svg';
					}
					if (title_img_mobile) {
					    title_img_mobile.src =  'assets/img/tv_person_gray.svg';
					}
	    } else {
					// Set both mobile and full header images to matching color.
					if (title_img_full) {
			        title_img_full.src =  'assets/img/tv_person.svg';
					}
				  if (title_img_mobile) {
					    title_img_mobile.src =  'assets/img/tv_person.svg';
					}
			}
	}

	function switchTheme(e) {
      title_img_full = document.getElementById('title-img');
      title_img_mobile = document.getElementById('title-img-mobile');

	    if (e.target.checked) {
	        document.documentElement.setAttribute('data-theme', 'light');
	        localStorage.setItem('theme', 'light');
					// Set both mobile and full header images to matching color.
					if (title_img_full) {
			        title_img_full.src =  'assets/img/tv_person_gray.svg';
					}
					if (title_img_mobile) {
					    title_img_mobile.src =  'assets/img/tv_person_gray.svg';
					}
	    }
	    else {
					document.documentElement.setAttribute('data-theme', 'dark');
	        localStorage.setItem('theme', 'dark');
					// Set both mobile and full header images to matching color.
					if (title_img_full) {
			        title_img_full.src =  'assets/img/tv_person.svg';
					}
					if (title_img_mobile) {
					    title_img_mobile.src =  'assets/img/tv_person.svg';
					}
	    }
	}

	toggleSwitch.addEventListener('change', switchTheme, false);

});
