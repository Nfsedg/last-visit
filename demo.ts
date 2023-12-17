const db = await Deno.openKv();

// const user = 'edgardev'
// const result = await db.set(["counter"], 0)

// console.log(result)

// const { value } = await db.get<number>(["counter"])
// console.log(value)

// const newCounter = value == null ? 0 : value + 1;

// const result = await db.set(["counter"], newCounter)

// console.log(result)

// a
// await db.set(["visits"], new Deno.KvU64(0n)) // 0n -> big int

// await db.atomic().sum(["visits"], 1n).commit()

// const result = await db.get<Deno.KvU64>(["visits"]);

// console.log(result.value)

// const entries = db.list({prefix: ["preferences"]})

// for await (const entry of entries) { // javascript
//   console.log(entry)
// }

// await db.delete(["preferences", "facundo"])