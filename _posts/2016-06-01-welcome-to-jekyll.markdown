---
layout: ajaxArticle
title:  "(占位测试)React Native"
articleDate3:   "2016-06-999"
describe:    "You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes."
categories: jekyll update
---


   ```ruby
    # ...ruby code
    ```


ffffffffffff

Hello
-----

# H1 header {#id}

## H2 header {#id}

### H3 header {#id}

#### H4 header {#id}

##### H5 header {#id}

###### H6 header {#id}


First level header
==================

Second level header
-------------------


This is a sample code block.

    Continued here.


> A sample blockquote.
>
> >Nested blockquotes are
> >also possible.
>
> ## Headers work too
> This is the outer quote again.

~~~
BUILDDIR      = _build
EXTRAS       ?= $(BUILDDIR)/extras

.PHONY: main clean

main:
	@echo "Building main facility..."
	build_main $(BUILDDIR)

clean:
	rm -rf $(BUILDDIR)/*

~~~

term
: definition
: another definition

another term
and another term
: and a definition for the term

~~~

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3
{: rules="groups"}
~~~