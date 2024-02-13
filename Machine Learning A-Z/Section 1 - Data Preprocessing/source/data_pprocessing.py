#   Sami Munir
#   Machine Learning A-Z
#   Section 1 - Data Preprocessing
#   - data_pprocessing.py
#######################################################
# Data Pre-processing Tools
#######################################################

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('Data.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values
print('X -->', X)
print('y -->', y)

# Taking care of missing data

# Encoding categorical data
# - Encoding the independent variable
# - Encoding the dependent variable

# Splitting the dataset into the training set & test set

# Feature scaling