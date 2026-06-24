# Derivada conformable de Khalil

La derivada conformable de orden $\alpha \in (0,1]$ fue introducida por {cite:t}`khalil2014new` como una generalización simple, local y altamente eficiente de la derivada clásica. 

````{prf:definition} Derivada conformable de Khalil
 :label: khalil

 Para una función diferenciable $f:[0,\infty) \rightarrow \mathbb{R}$, la derivada conformable de orden $\alpha$ se define como

 ```{math}
 :label: khalil_derivative
  {}^{K}\mathcal{D}_{t}^{\alpha}~f(t) = \lim_{\epsilon \rightarrow 0} \frac{f(t + \epsilon t^{1-\alpha}) - f(t)}{\epsilon}, \quad t > 0.
 ```
````

Para el modelado computacional, la propiedad más crítica de esta definición es que, si $f$ es diferenciable en el sentido clásico, la derivada fraccionaria puede expresarse como un simple escalamiento ponderado en el tiempo de la primera derivada

\begin{equation}
 {}^{K}\mathcal{D}_{t}^{\alpha}~f(t) = t^{1-\alpha} \frac{\mathrm{d}f}{\mathrm{d}t}(t).
\end{equation}

# Consistencia dimensional
En los sistemas físicos, cambiar el orden de la derivada de $1$ a $\alpha$ altera las unidades fundamentales de la ecuación (e.g., de $s^{-1}$ a $s^{-\alpha}$). Para preservar la homogeneidad dimensional y el significado físico, se introduce un parámetro de escalamiento $\sigma$ con unidades de tiempo $[s]$. La formulación dimensionalmente robusta resulta ser

\begin{equation}
 {}^{K}\mathcal{D}_{t}^{\alpha}~f(t) = \left(\frac{t}{\sigma}\right)^{1-\alpha} \frac{\mathrm{d}f}{\mathrm{d}t}(t).
\end{equation}

Al convertir una ecuación diferencial estándar $\frac{\mathrm{d}x}{\mathrm{d}t} = F(x, t)$ a su equivalente fraccionario conformable, se reordenan los términos para despejar la derivada clásica, lo cual permite emplear integradores numéricos estándar como Runge-Kutta o BDF

\begin{equation}
 \frac{\mathrm{d}x}{\mathrm{d}t} = \left(\frac{t}{\sigma}\right)^{\alpha - 1} F(x, t).
\end{equation}

Este factor de escalamiento actúa como el "modificador fraccionario" central a lo largo de los sistemas dinámicos explorados en este reporte.

# Propiedades Principales
* Para $\alpha = 1$, se reduce a la derivada usual: ${}^{K}\mathcal{D}_{t}^{1}~f(t) = f'(t)$.
* ${}^{K}\mathcal{D}_{t}^{\alpha}~(c) = 0$ para cualquier constante $c$.
* La regla del producto y la regla de la cadena se mantienen en la misma forma que en el cálculo clásico.
* Para monomios: ${}^{K}\mathcal{D}_{t}^{\alpha}~(t^p) = p \, t^{p-\alpha}$.

La derivada conformable **reescala el eje temporal** por un factor $t^{\,1-\alpha}$:
* En tiempos iniciales ($t \to 0^+$) y para $0<\alpha<1$, la derivada puede volverse muy grande (desacelerando la dinámica).
* En tiempos mayores, el escalamiento disminuye, lo que en efecto "acelera" la dinámica.

A diferencia de las derivadas de Riemann--Liouville o Liouville-Caputo, la derivada conformable es **local** (no posee un núcleo integral), por lo que **no** modela una memoria a largo plazo.  En su lugar, captura el comportamiento fraccionario introduciendo un escalamiento dependiente del tiempo en la derivada.
