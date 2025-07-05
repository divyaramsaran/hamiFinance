const extractCustomers = () => {
  return Deno.readTextFile("./customers.csv").then((data) => {
    return data.split("\n").map((line) => line.trim());
  });
};
