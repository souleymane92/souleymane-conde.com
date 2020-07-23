function addMenu(pageId) {
    var menuContent = 
        `<ul>
            <li><a id= "page_accueil" class="unactive" href="../index.html">Accueil</a></li>
            <li><a id= "page_cv" class="unactive" href="../cv.html">CV</a></li>
            <li><a id= "page_publications" class="unactive" href="index.html">Publications</a></li>
        </ul>`;
   
    document.getElementById('menu').innerHTML = menuContent;
    document.getElementById(pageId).className = "active";     
}