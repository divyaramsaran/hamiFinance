const extractCustomers = () => {
  return Deno.readTextFile("./customers.csv")
    .then((data) => {
      return data.split("\n").map((line) => line.trim());
    })
    .then((lines) => {
      const customerWithTransactions = [];
      lines.forEach((line) => {
        const customer = line.split(",").map((element) => {
          return element.trim();
        });

        customerWithTransactions.push(customer);
      });

      return customerWithTransactions;
    });
};

const add = (arr) => {
  return arr.reduce((sum, number) => {
    return sum + number;
  }, 0);
};

const extractTransactions = () => {
  return extractCustomers().then((val) => {
    return val.map((customer) => {
      const [name, ...transFiles] = customer;

      const allTransactionsSum = transFiles.reduce((sum, file) => {
        const transactionsSum = Deno.readTextFile("./inputFiles/" + file).then(
          (data) => {
            const transactions = data
              .split("\n")
              .map((strNum) => Number(strNum));
            return add(transactions);
          }
        );
        return sum + transactionsSum;
      }, 0);
      return [name, allTransactionsSum];
    });
  });
};

extractTransactions().then((data) => {
  console.log(data);
});
