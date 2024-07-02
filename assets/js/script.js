// const themeMode = document.getElementById('theme-mode');
// console.log(toggler2)



$('document').ready(function(){

    let toggler2 = document.getElementById('cb2');
    let themeMode = localStorage.getItem("themeMode");

    toggler2.addEventListener('click', function () {
        // console.log('here')
        if (this.checked) {
            // console.log(this)
            document.body.classList.remove('light');
            document.getElementById('logo').innerHTML = `
            <img
                          src="/assets/images/desktop-dark.png"
                          style="width: 130px; height: 130px"
                          loading="lazy"
                          alt=""
                          class="logo-icon"
                      />
            `
            localStorage.setItem("themeMode", "dark")
            
            // themeMode.innerHTML = 'light Mode';
        } else {
            document.body.classList.add('light');
            document.getElementById('logo').innerHTML = `
    <img
                  src="/assets/images/desktop-light.png"
                  style="width: 130px; height: 130px"
                  loading="lazy"
                  alt=""
                  class="logo-icon"
              />
    `
            localStorage.setItem("themeMode", "light")
            
    
            // themeMode.innerHTML = 'Light Mode';
    
        }
    });

    if (themeMode == "light" || themeMode == undefined || themeMode == null) {
        // document.body.classList.remove('light');
        document.body.classList.add('light');
        document.getElementById('logo').innerHTML = `
    <img
                  src="/assets/images/desktop-light.png"
                  style="width: 130px; height: 130px"
                  loading="lazy"
                  alt=""
                  class="logo-icon"
              />
    `
    } else if (themeMode == "dark" ) {
        document.body.classList.remove('light');
        toggler2.checked = true;
        document.getElementById('logo').innerHTML = `
    <img
                  src="/assets/images/desktop-dark.png"
                  style="width: 130px; height: 130px"
                  loading="lazy"
                  alt=""
                  class="logo-icon"
              />
    `
        
    }


    
});
// const toggler = document.getElementById('cb2');
// const themeMode = document.getElementById('theme-mode');

// toggler.addEventListener('change', function () {
//     if (this.checked) {
//         document.body.classList.add('light');
//         themeMode.innerHTML = 'light Mode';
//     } else {
//         document.body.classList.remove('light');
//         themeMode.innerHTML = 'Light Mode';

//     }
// });
