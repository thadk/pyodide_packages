import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="ete3-ncbidata",
    version="0.0.2",
    author="Example Author",
    author_email="author@example.com",
    description="A small example package",
    long_description=long_description,
    long_description_content_type="text/markdown",
    project_urls={
        "Bug Tracker": "https://github.com/pypa/sampleproject/issues",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    package_dir={"": "."},
    include_package_data = True,
    data_files=[
        ('ete3_data', ['etetoolkit/taxa.sqlite', 'etetoolkit/taxa.sqlite.traverse.pkl']),
    ],
    packages=setuptools.find_packages(where="."),
    python_requires=">=3.6",
)
