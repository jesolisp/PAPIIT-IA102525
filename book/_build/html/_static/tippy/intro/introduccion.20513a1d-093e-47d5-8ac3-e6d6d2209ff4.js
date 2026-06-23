selector_to_html = {"a[href=\"#equation-d24e3c39-a92d-4297-ba64-0b30c8b45069\"]": "<div class=\"amsmath math notranslate nohighlight\" id=\"equation-d24e3c39-a92d-4297-ba64-0b30c8b45069\">\n\\[\\begin{equation}\n {}^{K}\\mathcal{D}_{t}^{\\alpha}~f(t) = \\left(\\frac{t}{\\sigma}\\right)^{1-\\alpha} \\frac{df}{dt}(t),\n\\end{equation}\\]</div>", "a[href=\"#introduccion\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Introducci\u00f3n<a class=\"headerlink\" href=\"#introduccion\" title=\"Link to this heading\">#</a></h1><p>El c\u00e1lculo de orden entero ha servido como el lenguaje fundamental de la f\u00edsica durante siglos, proporcionando marcos robustos para el modelado de sistemas cinem\u00e1ticos, mec\u00e1nicos y biol\u00f3gicos. Sin embargo, las ecuaciones diferenciales ordinarias (EDO) cl\u00e1sicas asumen inherentemente que el estado futuro de un sistema depende \u00fanicamente de su estado presente y de una tasa de cambio localizada. En la realidad, muchos sistemas complejos \u2014que abarcan desde materiales viscoel\u00e1sticos hasta tejidos biol\u00f3gicos heterog\u00e9neos\u2014 exhiben efectos de memoria, difusi\u00f3n an\u00f3mala y din\u00e1micas no locales que no pueden ser capturadas en su totalidad por operadores de orden entero.</p><p>El c\u00e1lculo fraccionario aborda esta limitaci\u00f3n al generalizar el orden de derivaci\u00f3n a valores no enteros (<span class=\"math notranslate nohighlight\">\\(\\alpha\\)</span>). Las definiciones fraccionarias tradicionales, como las de Riemann-Liouville o Liouville-Caputo, introducen convoluciones integrales que son computacionalmente costosas y anal\u00edticamente engorrosas para sistemas no lineales complejos. Para superar estos cuellos de botella computacionales y, al mismo tiempo, conservar el poder descriptivo del modelado fraccionario, <span id=\"id1\">Khalil <em>et al.</em> (<a class=\"reference internal\" href=\"../references.html#id2\" title=\"Khalil, R., Al Horani, M., Yousef, A., &amp; Sababheh, M. (2014). A new definition of fractional derivative. Journal of computational and applied mathematics, 264, 65\u201370.\">2014</a>)</span> introdujeron la Derivada Conformable. Para una funci\u00f3n diferenciable <span class=\"math notranslate nohighlight\">\\(f(t)\\)</span>, la derivada conformable de orden <span class=\"math notranslate nohighlight\">\\(\\alpha \\in (0,1]\\)</span> se define de forma local, permitiendo que se exprese como un escalamiento ponderado en el tiempo y dimensionalmente consistente de la primera derivada cl\u00e1sica</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: false,
                placement: 'auto-start', maxWidth: 500, interactive: true, boundary: document.body, appendTo: document.body,
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {var isFirefox=typeof InstallTrigger!=='undefined';if(isFirefox&&window.MathJax&&MathJax.startup&&MathJax.startup.output&&MathJax.startup.output.name==="SVG"){const svgs=instance.popper.querySelectorAll('svg');svgs.forEach(svg=>{let bbox=svg.getBBox(),x=bbox.x,y=bbox.y,width=bbox.width,height=bbox.height;svg.setAttribute('width',width);svg.setAttribute('height',height);svg.setAttribute('viewBox',`${x} ${y} ${width} ${height}`);});let rescale=0.015;svgs.forEach(svg=>{let bbox=svg.getBBox(),width=bbox.width,height=bbox.height;svg.setAttribute('width',width*rescale);svg.setAttribute('height',height*rescale);});}});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
