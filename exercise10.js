function sentensify(str) {
  let aux = str.split(/[\s,.-]/);
  return aux.join(" ");
}
sentensify("May-the-force-be-with-you");
