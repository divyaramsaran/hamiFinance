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

const extractTransactions = () => {
  return extractCustomers().then((val) => {
    // val.map((customer) => {
    //   const [name, ...transFiles] = customer;
    //   transFiles.reduce((sum, file) => {
    //     const amounts = Deno.readTextFile(file).then((transaction) => {
    //       return transFiles.split("\n");
    //     });
    //   });
    // });
  });
};

console.log(extractTransactions());
