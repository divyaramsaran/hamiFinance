# Hami Finance

## Problem Statement

As a software developer at Hami Finance, you’ve got an exciting task ahead! You’re going to write a program that processes customer transaction data. You will be provided with a file called `customers.csv`, which holds details about customers and the transaction files associated with them. Your goal is to read these transaction files, calculate the total balance for each customer, and generate an output file, balance.csv, containing the aggregated results.

But here's the catch: The entire process should be optimized to execute in the least amount of time possible.

## Input

1. `customers.csv`: A CSV file where each line represents a customer and their corresponding transaction files. The format is as follows:
   `CUSTOMER_NAME,TRANSACTION_FILE1,TRANSACTION_FILE2,...,TRANSACTION_FILEN`

- CUSTOMER_NAME: The name of the customer.
- TRANSACTION_FILE: A list of text files (with .txt extension) that contain the transaction data for that customer.
  Example: `customers.csv`

```
Rajesh,trans1.txt,trans2.txt,trans3.txt
Suman,trans4.txt
Rita,trans5.txt,trans6.txt
```

2. `Transaction Files`: Each transaction file contains a list of transactions, where each transaction has a single line representing the transaction amount (an integer). You need to sum these transaction amounts for each customer.

Example content of a transaction file (trans1.txt):

```
-195
826
859
```

This file contains three transactions: -195, 826, and 859, which sum up to 1490.

## Output

1. `balance.csv`: After processing all the transaction files for each customer, your program should output the aggregated results in a CSV file. Each line of the file should have the following format:
   `CUSTOMER_NAME,TRANSACTION_COUNT,BALANCE`

- `CUSTOMER_NAME`: The name of the customer.
- `TRANSACTION_COUNT`: The total number of transactions the customer made (sum of transactions across all their files).
- `BALANCE`: The total balance, which is the sum of all the transactions for that customer.

Example balance.csv:

```
Rajesh,6,1899
Suman,1,350
Rita,3,1240
```
