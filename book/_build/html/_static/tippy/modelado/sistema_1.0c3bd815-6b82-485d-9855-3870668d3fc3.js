selector_to_html = {"a[href=\"#pendulo-simple\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">P\u00e9ndulo simple<a class=\"headerlink\" href=\"#pendulo-simple\" title=\"Link to this heading\">#</a></h1><p>Para establecer una l\u00ednea de base, primero se define el sistema cl\u00e1sico del p\u00e9ndulo no lineal con amortiguamiento. Las ecuaciones gobernantes son:</p><p><strong>Sistema cl\u00e1sico original del p\u00e9ndulo</strong></p>", "a[href=\"#equation-d1409270-0074-4cd7-84f3-65e42a823b05\"]": "<div class=\"amsmath math notranslate nohighlight\" id=\"equation-d1409270-0074-4cd7-84f3-65e42a823b05\">\n\\[\\begin{equation}\n \\begin{aligned}\n  t^{1-\\alpha} x_1' &amp;= x_2 \\quad \\Rightarrow \\quad x_1' = t^{\\alpha-1} x_2 \\\\\n  t^{1-\\alpha} x_2' &amp;= -\\frac{g}{l} \\sin(x_1) - \\frac{K_f}{m} x_2 \\quad \\Rightarrow \\quad x_2' = t^{\\alpha-1} \\left( -\\frac{g}{l} \\sin(x_1) - \\frac{K_f}{m} x_2 \\right)\n \\end{aligned}\n\\end{equation}\\]</div>", "a[href=\"#equation-9eecf0a6-fc1e-4185-9a34-916632574359\"]": "<div class=\"amsmath math notranslate nohighlight\" id=\"equation-9eecf0a6-fc1e-4185-9a34-916632574359\">\n\\[\\begin{equation}\n \\begin{aligned}\n  x_1' &amp;= t^{\\alpha-1} x_2 \\\\\n  x_2' &amp;= t^{\\alpha-1} \\left( -\\frac{g}{l} \\sin(x_1) - \\frac{K_f}{m} x_2 \\right)\n \\end{aligned}\n\\end{equation}\\]</div>", "a[href=\"#interpretacion-fisica\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Interpretaci\u00f3n F\u00edsica<a class=\"headerlink\" href=\"#interpretacion-fisica\" title=\"Link to this heading\">#</a></h2><p>El factor de escalamiento dependiente del tiempo <span class=\"math notranslate nohighlight\">\\(t^{\\alpha-1}\\)</span> tiene implicaciones f\u00edsicas interesantes:</p>", "a[href=\"#equation-17c1ea7f-044e-4f6a-962b-1244e1856502\"]": "<div class=\"amsmath math notranslate nohighlight\" id=\"equation-17c1ea7f-044e-4f6a-962b-1244e1856502\">\n\\[\\begin{equation}\n \\begin{aligned}\n  D^\\alpha_t x_1 &amp;= x_2 \\\\\n  D^\\alpha_t x_2 &amp;= -\\frac{g}{l} \\sin(x_1) - \\frac{K_f}{m} x_2\n \\end{aligned}\n\\end{equation}\\]</div>", "a[href=\"#equation-2a06bd42-37f8-49ac-97ea-1c9143b23be7\"]": "<div class=\"amsmath math notranslate nohighlight\" id=\"equation-2a06bd42-37f8-49ac-97ea-1c9143b23be7\">\n\\[\\begin{equation}\n \\begin{aligned}\n  x_1' &amp;= x_2 \\\\\n  x_2' &amp;= -\\frac{g}{l} \\sin(x_1) - \\frac{K_f}{m} x_2\n \\end{aligned}\n\\end{equation}\\]</div>"}
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
