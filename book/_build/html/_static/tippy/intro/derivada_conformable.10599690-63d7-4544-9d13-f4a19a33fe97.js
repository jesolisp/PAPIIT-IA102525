selector_to_html = {"a[href=\"#propiedades-principales\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Propiedades Principales<a class=\"headerlink\" href=\"#propiedades-principales\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#derivada-conformable-de-khalil\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Derivada conformable de Khalil<a class=\"headerlink\" href=\"#derivada-conformable-de-khalil\" title=\"Link to this heading\">#</a></h1><p>La derivada conformable de orden <span class=\"math notranslate nohighlight\">\\(\\alpha \\in (0,1]\\)</span> fue introducida por <span id=\"id1\">Khalil <em>et al.</em> (<a class=\"reference internal\" href=\"../references.html#id2\" title=\"Khalil, R., Al Horani, M., Yousef, A., &amp; Sababheh, M. (2014). A new definition of fractional derivative. Journal of computational and applied mathematics, 264, 65\u201370.\">2014</a>)</span> como una generalizaci\u00f3n simple, local y altamente eficiente de la derivada cl\u00e1sica.</p>", "a[href=\"#consistencia-dimensional\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Consistencia dimensional<a class=\"headerlink\" href=\"#consistencia-dimensional\" title=\"Link to this heading\">#</a></h1><p>En los sistemas f\u00edsicos, cambiar el orden de la derivada de <span class=\"math notranslate nohighlight\">\\(1\\)</span> a <span class=\"math notranslate nohighlight\">\\(\\alpha\\)</span> altera las unidades fundamentales de la ecuaci\u00f3n (e.g., de <span class=\"math notranslate nohighlight\">\\(s^{-1}\\)</span> a <span class=\"math notranslate nohighlight\">\\(s^{-\\alpha}\\)</span>). Para preservar la homogeneidad dimensional y el significado f\u00edsico, se introduce un par\u00e1metro de escalamiento <span class=\"math notranslate nohighlight\">\\(\\sigma\\)</span> con unidades de tiempo <span class=\"math notranslate nohighlight\">\\([s]\\)</span>. La formulaci\u00f3n dimensionalmente robusta resulta ser:</p>", "a[href=\"#equation-79f3602f-60b6-4ffd-a232-61408edfd761\"]": "<div class=\"amsmath math notranslate nohighlight\" id=\"equation-79f3602f-60b6-4ffd-a232-61408edfd761\">\n\\[\\begin{equation}\n {}^{K}\\mathcal{D}_{t}^{\\alpha}~f(t) = \\left(\\frac{t}{\\sigma}\\right)^{1-\\alpha} \\frac{df}{dt}(t)\n\\end{equation}\\]</div>", "a[href=\"#equation-197af88c-505d-4108-b2a7-12202ebf84c4\"]": "<div class=\"amsmath math notranslate nohighlight\" id=\"equation-197af88c-505d-4108-b2a7-12202ebf84c4\">\n\\[\\begin{equation}\n {}^{K}\\mathcal{D}_{t}^{\\alpha}~f(t) = \\lim_{\\epsilon \\rightarrow 0} \\frac{f(t + \\epsilon t^{1-\\alpha}) - f(t)}{\\epsilon}, \\quad t &gt; 0$$\n\\end{equation}\\]</div>", "a[href=\"#equation-85c9af44-c8d8-4ee0-b444-b2f6cf240a5f\"]": "<div class=\"amsmath math notranslate nohighlight\" id=\"equation-85c9af44-c8d8-4ee0-b444-b2f6cf240a5f\">\n\\[\\begin{equation}\n {}^{K}\\mathcal{D}_{t}^{\\alpha}~f(t) = t^{1-\\alpha} \\frac{\\mathrm{d}f}{\\mathrm{d}t}(t)\n\\end{equation}\\]</div>"}
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
