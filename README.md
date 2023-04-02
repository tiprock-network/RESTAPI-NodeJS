### REST API NodeJS
## Building a simple REST API from scratch using node, without frameworks. 

This is basic and for anyone starting out in API development with Javascript.


To prove the equation:

$(1 - \frac{1}{2}\nabla)(1 - \nabla)^{-\frac{1}{2}} = \sqrt{1 + \frac{\sigma^2}{4}}

We can start by expanding the expression on the left-hand side:

(1 - \frac{1}{2}\nabla)(1 - \nabla)^{-\frac{1}{2}}

= (1 - \frac{1}{2}\nabla)\sum_{n=0}^{\infty} \binom{-1/2}{n}(-\nabla)^n

= \sum_{n=0}^{\infty} \binom{-1/2}{n}(-\nabla)^n - \frac{1}{2}\sum_{n=0}^{\infty} \binom{-1/2}{n-1}(-\nabla)^n

= \sum_{n=0}^{\infty} \binom{-1/2}{n}(-\nabla)^n + \frac{1}{2}\sum_{n=1}^{\infty} \binom{-1/2}{n-1}(-\nabla)^n

= 1 + \sum_{n=1}^{\infty} \left\binom{-1/2}{n} + \frac{1}{2}\binom{-1/2}{n-1}\right^n

Now, let's focus on the coefficients inside the square brackets:

\binom{-1/2}{n} + \frac{1}{2}\binom{-1/2}{n-1}

= \frac{(-1/2)(-3/2)\cdots(-(2n-1)/2)}{n!} + \frac{1}{2}\frac{(-1/2)(-3/2)\cdots(-(2n-3)/2)}{(n-1)!}

= \frac{(-1)^{n+1}(2n-3)!!}{2^n n!}

where "!!" denotes the double factorial.

Substituting this into the previous expression, we get:

(1 - \frac{1}{2}\nabla)(1 - \nabla)^{-\frac{1}{2}}

= 1 + \sum_{n=1}^{\infty} \frac{(-1)^{n+1}(2n-3)!!}{2^n n!}(-\nabla)^n

= 1 + \sum_{n=1}^{\infty} \frac{(-1)^{n+1}(2n-1)!!}{2^n n!}\frac{\nabla^n}{2^n}

= 1 + \sum_{n=1}^{\infty} \frac{(-1)^{n+1}(2n-1)!!}{4^n n!}\nabla^n

Now, let's consider the right-hand side of the original equation:

\sqrt{1 + \frac{\sigma^2}{4}}

= \sum_{n=0}^{\infty} \frac{1}{2^n n!}\left(\frac{\sigma^2}{4}\right)^n

= 1 + \sum_{n=1}^{\infty} \frac{1}{2^n n!}\left(\frac{\sigma^2}{4}\right)^n

= 1 + \sum$
