from setuptools import setup, find_packages
from pathlib import Path

ROOT = Path(__file__).resolve().parent
requirements = (ROOT / "requirements.txt").read_text().splitlines()

setup(
    name="util",
    version="0.1.0",
    packages=find_packages(),
    install_requires=requirements,
    entry_points="""
        [console_scripts]
        util=util.util:main
    """,
    classifiers=[
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
    ],
)
