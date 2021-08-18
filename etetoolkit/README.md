# Example Package

This is a simple example package. You can use
[Github-flavored Markdown](https://guides.github.com/features/mastering-markdown/)
to write your content.

to generate sqlite
- install ete3
- open python console
- run:
- `    from ete3 import NCBITaxa ncbi = NCBITaxa()`
- per http://etetoolkit.org/docs/latest/tutorial/tutorial_ncbitaxonomy.html it will download inputs and create the sqlite file
- copy ~/.etetoolkit to ./etetoolkit before running `python setup.py bdist_wheel`
