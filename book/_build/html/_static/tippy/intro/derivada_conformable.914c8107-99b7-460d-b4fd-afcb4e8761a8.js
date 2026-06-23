selector_to_html = {"a[href=\"#derivada-conformable-de-khalil\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Derivada conformable de Khalil<a class=\"headerlink\" href=\"#derivada-conformable-de-khalil\" title=\"Link to this heading\">#</a></h1><p>La derivada conformable de orden <span class=\"math notranslate nohighlight\">\\(\\alpha \\in (0,1]\\)</span> fue introducida por <span id=\"id1\">(<a class=\"reference internal\" href=\"../references.html#id2\" title=\"Khalil, R., Al Horani, M., Yousef, A., &amp; Sababheh, M. (2014). A new definition of fractional derivative. Journal of computational and applied mathematics, 264, 65\u201370.\">Khalil <em>et al.</em>, 2014</a>)</span> como una generalizaci\u00f3n simple, local y altamente eficiente de la derivada cl\u00e1sica.</p>"}
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
