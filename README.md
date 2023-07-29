# responsiveWeb
project-responsive Website

Day 1 - 2023.07.12 >> install extension / setting for annotation / connect to Git / HTML

Day 2 - 2023.07.17 >> CSS

Day 3 - 2023. 07. 21 >> build structure of HTML (Head)

Useful site
1. [https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML]

2. [https://fontawesome.com/start/confirm]


Day 4 - 2023. 07. 24 >> build body HTML
    4-1)) body header

    4-2)) body home

    4-3)) body about

    4-4)) body skills

    4-5)) body works
    *short key [https://jhnyang.tistory.com/408]
        1. ctrl+shift+L+click >> select many and type many all at once
        2. ctrl+d >> select some edit
        3. art+click >> what I want select edit
        4. etc ...

    4-6)) body testimonial

    4-7)) Footer

Useful site
1. [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a]



Day 5 - 2023. 07. 27 >> CSS

>> naming
 BEM [Block, Element, Modifier]

 ex) 
 .card
 .card_img_dark
 .card_title
 .card_desc
 .card_btn_blue
 ... etc


header
sticky : outside home
fix : inside home


Useful site
1. [https://cssgenerator.org/box-shadow-css-generator.html]

2. [https://manuarora.in/boxshadows]



Day 6 - 2023. 07. 28 >> JavaScript

1. Create a function where the header line has a transparent background until the web page is scrolled, and then changes the background color when scrolling.

document.querySelector('.header');
>> calling the desired element in the browser

document. >> An object that holds information about the entire document
querySelector >> function
('.header') >> selector [. # ]

//window.document.querySelector();
window >> global object


const headerHeight = header.getBoundingClientRect().height;
 ===

 const headerRect = header.getBoundingClientRect();
 const headerHeight = headerRect.height;


 2. As you scroll down in the Home section, it becomes more and more transparent.

 
