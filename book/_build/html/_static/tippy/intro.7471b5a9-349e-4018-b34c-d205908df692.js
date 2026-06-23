selector_to_html = {"a[href=\"#modelado-de-sistemas-fisicos\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Modelado de sistemas f\u00edsicos<a class=\"headerlink\" href=\"#modelado-de-sistemas-fisicos\" title=\"Link to this heading\">#</a></h1><p>El presente manual ha sido desarrollado con el prop\u00f3sito de servir como una herramienta acad\u00e9mica de referencia para docentes y estudiantes interesados en el modelado de sistemas f\u00edsicos bajo el enfoque del c\u00e1lculo fraccionario. Esta obra se deriva de las actividades de investigaci\u00f3n del proyecto <strong>PAPIIT-IA102525</strong> titulado <em>\u201cModelado de Sistemas F\u00edsicos y An\u00e1lisis Din\u00e1mico Mediante C\u00e1lculo Fraccionario\u201d</em>, el cual se encuentra bajo la direcci\u00f3n del investigador principal, el Dr. Jes\u00fas Emmanuel Sol\u00eds P\u00e9rez, Profesor de Tiempo Completo de la Licenciatura en Tecnolog\u00eda en la Escuela Nacional de Estudios Superiores Unidad Juriquilla de la Universidad Nacional Aut\u00f3noma de M\u00e9xico.</p><p>El contenido de este volumen aborda con rigor los fundamentos matem\u00e1ticos te\u00f3ricos de la derivada conformable de Khalil, as\u00ed como su implementaci\u00f3n pr\u00e1ctica en el modelado de diversos sistemas f\u00edsicos. Asimismo, se integran metodolog\u00edas para la estimaci\u00f3n de par\u00e1metros f\u00edsicos y la generaci\u00f3n de datos sint\u00e9ticos orientados a su posterior an\u00e1lisis din\u00e1mico.</p>"}
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
