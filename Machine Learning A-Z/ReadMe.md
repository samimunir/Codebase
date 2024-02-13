Sami Munir | Rutgers University | Machine Learning A-Z
# Machine Learning A-Z
## Section 1 - Data Preprocessing
## Section 2 - Simple Linear Regression
## Section 3 - Multiple Linear Regression
## Section 4 - Polynomial Regression
## Section 5 - Support Vector Regression (SVR)
## Machine Learning A-Z (Code + Datasets)
### The Machine Learning Process
__1. Data Pre-processing__
* Importing the data
* Cleaning up the data
* Splitting data into training and test sets

__2. Modelling__
* Build the model
* Train the model
* Make predictions using the model

__3. Evaluation__
* Calculate performance metrics
* Make a verdict

### Splitting the data set
__Training set__
80% of the data allocated for training.
- Used to build the model.
__Test set__
20% of the data allocated for testing.
- Take the test data and apply our model to them.
- We can take the predicted values using the model on the test set and compare to the actual values of the test set.
### Feature Scaling
Always applied to columns of data (never applied to data in rows).
__Normalization__
X' = (X - X_min) / (X_max - X_min) --> [0, 1]

__Standardization__
X' = (X - u) /  std_dev --> (u is the average)

The unscaled features will contain some column values to be significanly larger or smaller than another set of column values. This can cause some negative effects on the training data and lead to undesired and inaccurate results within our model.