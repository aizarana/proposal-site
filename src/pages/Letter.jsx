import { Link } from 'react-router-dom'

export default function Letter() {
  return (
    <section className="page letter">
      <h1 className="script">My Dearest Hassam...</h1>
      <div className="letter-card">
        <p>
          Jab se Ap meri zindagi mein aaye ho, har din ek nayi subah lagti hai.
          Apki muskurahat meri duniya ki roshni hai, aur Apka saath mera
          sabse bada sukoon.
        </p>
        <p>
          Main har lamha Apke saath jee lena chahti hoon — har khushi, har
          mushkil, har dua.
        </p>
        <p>— Forever yours ❤</p>
      </div>
      <Link className="btn primary" to="/question">One Last Thing...</Link>
    </section>
  )
}
