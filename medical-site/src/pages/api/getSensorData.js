// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  if(req.method == 'POST'){
    const val = req.body.data;
    console.log("sensor values are", val);
    res.status(201).json({hello:"vedha"});
  }
}
