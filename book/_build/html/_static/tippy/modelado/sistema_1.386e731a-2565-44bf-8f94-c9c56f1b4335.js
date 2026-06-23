selector_to_html = {"a[href=\"#interpretacion-fisica\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Interpretaci\u00f3n F\u00edsica<a class=\"headerlink\" href=\"#interpretacion-fisica\" title=\"Link to this heading\">#</a></h2><p>El factor de escalamiento dependiente del tiempo <span class=\"math notranslate nohighlight\">\\(t^{\\alpha-1}\\)</span> tiene implicaciones f\u00edsicas interesantes:</p>", "a[href=\"#pendulo-sinmple\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">P\u00e9ndulo sinmple<a class=\"headerlink\" href=\"#pendulo-sinmple\" title=\"Link to this heading\">#</a></h1><p>Para establecer una l\u00ednea base, primero se define el sistema cl\u00e1sico del p\u00e9ndulo no lineal con amortiguamiento. Las ecuaciones gobernantes son:</p><p><strong>Sistema cl\u00e1sico original del p\u00e9ndulo</strong>\n$<span class=\"math notranslate nohighlight\">\\(\n\\begin{aligned}\nx_1' &amp;= x_2 \\\\\nx_2' &amp;= -\\frac{g}{l} \\sin(x_1) - \\frac{K_f}{m} x_2\n\\end{aligned}\n\\)</span>$</p>"}
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
