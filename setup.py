from setuptools import setup, find_packages

setup(
    name="util",
    version="0.1.0",
    packages=find_packages(),
    install_requires=["uvloop"],
    entry_points="""
        [console_scripts]
        util=util.util:main
    """,
    classifiers=[
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3,8",
        "Programming Language :: Python :: 3.9",
    ],
)
