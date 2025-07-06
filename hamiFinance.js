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

const extractTransactions = async () => {
  const customers = await extractCustomers();
  return Promise.all(
    customers.map(async (customer) => {
      const [name, ...transFiles] = customer;
      let allTransactionsSum = 0;
      let transactionsCount = 0;
      for (const file of transFiles) {
        const data = await Deno.readTextFile("./inputFiles/" + file);
        const transactions = data.split("\n").map((strNum) => Number(strNum));
        allTransactionsSum += add(transactions);
        transactionsCount += transactions.length;
      }
      return [name, transactionsCount, allTransactionsSum];
    })
  );
};

extractTransactions().then((data) => {
  data.forEach((customer) => {
    Deno.writeTextFile(
      "./balance.csv",
      `${customer[0]},${customer[1]},${customer[2]}\n`,
      { append: true }
    );
  });
});
