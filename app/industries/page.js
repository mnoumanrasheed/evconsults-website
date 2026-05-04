"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Fuel, ShoppingBag, Home, Hotel, Utensils, Truck, Building, User, MapPin, ArrowRight, Zap } from 'lucide-react';

const fadeUp = { hidden:{ opacity:0, y:20 }, visible:{ opacity:1, y:0, transition:{ duration:0.55 } } };
const stagger = { hidden:{}, visible:{ transition:{ staggerChildren:0.08 } } };

const INDUSTRIES = [
  { title:"Petrol Pumps",        desc:"Already serve vehicle users with road visibility — ideal for EV integration.",      icon:<Fuel size={20}/>,        color:"#00AEEF" },
  { title:"Shopping Malls",      desc:"Attract premium customers and increase parking value and dwell time.",               icon:<ShoppingBag size={20}/>,  color:"#39D353" },
  { title:"Housing Societies",   desc:"Provide EV charging as a premium resident facility in gated communities.",           icon:<Home size={20}/>,         color:"#8B5CF6" },
  { title:"Hotels",              desc:"Offer overnight and destination charging for guests and business travelers.",         icon:<Hotel size={20}/>,         color:"#F59E0B" },
  { title:"Restaurants",         desc:"Attract EV drivers who want to charge their vehicle while they dine.",               icon:<Utensils size={20}/>,      color:"#EF4444" },
  { title:"Fleet Operators",     desc:"Reduce fuel dependency with dedicated depot or on-route EV charging.",              icon:<Truck size={20}/>,         color:"#10B981" },
  { title:"Commercial Buildings",desc:"Offer charging to employees and visitors — enhancing corporate sustainability.",     icon:<Building size={20}/>,      color:"#D946EF" },
  { title:"Investors",           desc:"Develop EV charging stations as a standalone long-term infrastructure business.",    icon:<User size={20}/>,          color:"#0EA5E9" },
  { title:"Highway Rest Areas",  desc:"Fast-charging points for intercity travel — solving range anxiety on key routes.",  icon:<MapPin size={20}/>,        color:"#F97316" },
];

export default function Industries() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position:'relative', padding:'9rem 0 5.5rem', background:'linear-gradient(135deg,rgba(4,13,26,0.92) 0%,rgba(11,31,51,0.96) 100%), url(/clean_energy_city.png)', backgroundSize:'cover', backgroundPosition:'center', color:'white', textAlign:'center', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-60px', left:'-60px', width:'450px', height:'450px', background:'radial-gradient(circle,rgba(0,174,239,0.12) 0%,transparent 70%)', borderRadius:'50%' }} />
        <div style={{ position:'absolute', bottom:'-60px', right:'-60px', width:'400px', height:'400px', background:'radial-gradient(circle,rgba(57,211,83,0.1) 0%,transparent 70%)', borderRadius:'50%' }} />
        <div className="container" style={{ position:'relative', zIndex:2 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ maxWidth:'760px', margin:'0 auto' }}>
            <motion.span variants={fadeUp} style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem', padding:'0.4rem 1.1rem', background:'rgba(57,211,83,0.12)', border:'1px solid rgba(57,211,83,0.3)', color:'#39D353', borderRadius:'2rem', fontSize:'0.75rem', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'1.5rem' }}>
              <Zap size={11} fill="#39D353"/> Industries We Serve
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ color:'white', fontSize:'clamp(2rem,4.5vw,3.2rem)', fontWeight:'900', marginBottom:'1.25rem', lineHeight:1.1, letterSpacing:'-0.02em' }}>
              EV Charging Solutions for<br/><span style={{ color:'#39D353' }}>Every Business Segment</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize:'1.1rem', color:'rgba(255,255,255,0.7)', maxWidth:'620px', margin:'0 auto', lineHeight:1.7 }}>
              Whether adding an amenity, attracting customers, or building a dedicated EV business — EVConsults delivers the right solution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Industry Cards ── */}
      <section className="section" style={{ background:'#F8FAFC' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign:'center', marginBottom:'3rem' }}>
              <span style={{ display:'inline-block', background:'rgba(0,174,239,0.1)', color:'#00AEEF', border:'1px solid rgba(0,174,239,0.3)', borderRadius:'2rem', padding:'0.3rem 1rem', fontSize:'0.72rem', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'0.75rem' }}>Who We Help</span>
              <h2 style={{ marginBottom:'0.5rem' }}>Industries We Work With</h2>
              <p style={{ color:'var(--color-text-light)', maxWidth:'560px', margin:'0 auto' }}>From petrol pump owners to highway developers — we guide every investor through the full EV setup process.</p>
            </motion.div>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px,1fr))', gap:'1rem' }}>
              {INDUSTRIES.map((ind, i) => (
                <motion.div key={i} variants={fadeUp}
                  custom={i}
                  whileHover={{ y:-5, boxShadow:`0 16px 36px rgba(0,0,0,0.1)`, borderColor: ind.color }}
                  transition={{ type:'spring', stiffness:300 }}
                  style={{ background:'white', borderRadius:'14px', border:'1px solid #EEF1F5', padding:'1.5rem', boxShadow:'0 1px 6px rgba(0,0,0,0.05)', transition:'all 0.3s', display:'flex', flexDirection:'column', gap:'0.85rem' }}>
                  {/* Icon */}
                  <div style={{ width:'46px', height:'46px', borderRadius:'12px', background:`${ind.color}15`, border:`1px solid ${ind.color}30`, display:'flex', alignItems:'center', justifyContent:'center', color:ind.color, flexShrink:0 }}>
                    {ind.icon}
                  </div>
                  {/* Content */}
                  <div>
                    <h4 style={{ fontSize:'0.95rem', fontWeight:'700', color:'#0B1F33', marginBottom:'0.35rem' }}>{ind.title}</h4>
                    <p style={{ fontSize:'0.82rem', color:'var(--color-text-light)', lineHeight:1.6, margin:0 }}>{ind.desc}</p>
                  </div>
                  {/* Learn more */}
                  <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:'0.3rem', fontSize:'0.78rem', fontWeight:'700', color:ind.color, textDecoration:'none', marginTop:'auto' }}>
                    Get Advice <ArrowRight size={12}/>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:'white', padding:'4rem 0', textAlign:'center' }}>
        <div className="container">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
            style={{ background:'linear-gradient(135deg,#040D1A,#0B1F33)', borderRadius:'20px', padding:'3.5rem 2rem', maxWidth:'800px', margin:'0 auto', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:'-40px', left:'-40px', width:'200px', height:'200px', borderRadius:'50%', background:'radial-gradient(circle,rgba(0,174,239,0.2) 0%,transparent 70%)' }} />
            <div style={{ position:'absolute', bottom:'-40px', right:'-40px', width:'200px', height:'200px', borderRadius:'50%', background:'radial-gradient(circle,rgba(57,211,83,0.2) 0%,transparent 70%)' }} />
            <div style={{ position:'relative', zIndex:1 }}>
              <h2 style={{ color:'white', marginBottom:'0.75rem', fontSize:'1.8rem' }}>Ready to Launch Your EV Charging Station?</h2>
              <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'1rem', marginBottom:'1.75rem', maxWidth:'500px', margin:'0 auto 1.75rem' }}>Book a free consultation and we'll guide you through every step — from feasibility to commissioning.</p>
              <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', padding:'0.9rem 2rem', background:'linear-gradient(135deg,#39D353,#2ab83f)', color:'#040D1A', fontWeight:'800', borderRadius:'50px', fontSize:'0.97rem', textDecoration:'none', boxShadow:'0 0 28px rgba(57,211,83,0.35)' }}>
                Book Free Consultation <ArrowRight size={15}/>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
