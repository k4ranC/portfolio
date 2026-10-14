export default function About() {
  return (
    <section id="about" style={{
      background: '#000',
      padding: '120px 40px',
      maxWidth: '700px',
      margin: '0 auto'
    }}>
      <p style={{
        color: 'rgba(255,255,255,0.25)',
        fontFamily: 'monospace',
        fontSize: '11px',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        marginBottom: '32px'
      }}>About</p>
      <p style={{
        color: 'rgba(255,255,255,0.75)',
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(16px, 2vw, 20px)',
        lineHeight: 1.9,
        marginBottom: '24px',
        fontWeight: 300
      }}>
        I'm a third-year Computer Science student at the University of Leeds who likes building things end to end: software people can use, simulations, and analysis of real data.
      </p>
      <p style={{
        color: 'rgba(255,255,255,0.5)',
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(14px, 1.8vw, 17px)',
        lineHeight: 1.9,
        fontWeight: 300
      }}>
        I work across web apps, Python and scientific computing, from a free tool for tradespeople to a black hole simulator. Currently applying to Masters programmes in computer science.
      </p>
    </section>
  )
}