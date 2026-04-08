import React from 'react';

export default function Login() {
  return (
    <>
      {/* ══ LOGIN SCREEN ══════════════════════════════════════════════ */}
      <div id="login-screen" style={{display:'flex',position:'fixed',inset:0,zIndex:9999,background:'linear-gradient(135deg,#0C1B2E 0%,#1A3050 60%,#0C1B2E 100%)',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'100%',maxWidth:'400px',padding:'0 24px'}}>
          <div style={{textAlign:'center',marginBottom:'32px'}}>
            <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'48px',fontWeight:900,color:'#fff',letterSpacing:'-2px'}}>LIVI<span style={{color:'#1A6BC4'}}>O</span></div>
            <div style={{fontSize:'11px',color:'#8AAAC8',letterSpacing:'3px',textTransform:'uppercase',marginTop:'2px'}}>Building Systems</div>
          </div>
          <div style={{background:'#fff',borderRadius:'14px',padding:'32px 28px',boxShadow:'0 24px 60px rgba(0,0,0,.5)'}}>
            <div style={{fontSize:'20px',fontWeight:700,color:'#0C1B2E',marginBottom:'3px'}}>Sign In</div>
            <div style={{fontSize:'11px',color:'#6b6a64',marginBottom:'22px'}}>Project Management Platform</div>
            <div id="login-error" style={{display:'none',background:'#FFF0F0',border:'1px solid #F5C0C0',color:'#9B1F1F',fontSize:'11px',padding:'9px 12px',borderRadius:'6px',marginBottom:'14px'}}></div>
            <div style={{marginBottom:'14px'}}>
              <label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'5px'}}>Username</label>
              <input id="login-user" type="text" placeholder="Enter username" autoComplete="username"
                style={{width:'100%',padding:'11px 13px',border:'1.5px solid #e0ddd5',borderRadius:'7px',fontSize:'13px',outline:'none',boxSizing:'border-box'}}
                onFocus={e=>e.target.style.borderColor='#1A6BC4'} onBlur={e=>e.target.style.borderColor='#e0ddd5'}
                onKeyDown={e=>{if(e.key==='Enter')document.getElementById('login-pass').focus()}}/>
            </div>
            <div style={{marginBottom:'22px'}}>
              <label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'5px'}}>Password</label>
              <div style={{position:'relative'}}>
                <input id="login-pass" type="password" placeholder="Enter password" autoComplete="current-password"
                  style={{width:'100%',padding:'11px 40px 11px 13px',border:'1.5px solid #e0ddd5',borderRadius:'7px',fontSize:'13px',outline:'none',boxSizing:'border-box'}}
                  onFocus={e=>e.target.style.borderColor='#1A6BC4'} onBlur={e=>e.target.style.borderColor='#e0ddd5'}
                  onKeyDown={e=>{if(e.key==='Enter')window.doLogin?.()}}/>
                <button onClick={()=>window.toggleLoginPass?.()} style={{position:'absolute',right:'11px',top:'50%',transform:'translateY(-50%)',background:'none',border:'none',cursor:'pointer',color:'#aaa',fontSize:'15px'}}>👁</button>
              </div>
            </div>
            <button onClick={()=>window.doLogin?.()}
              style={{width:'100%',padding:'13px',background:'#0C1B2E',color:'#fff',border:'none',borderRadius:'8px',fontSize:'14px',fontWeight:700,cursor:'pointer',letterSpacing:'.5px'}}
              onMouseOver={e=>e.target.style.background='#1A3050'} onMouseOut={e=>e.target.style.background='#0C1B2E'}>
              Sign In &rarr;
            </button>
            <div style={{marginTop:'14px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <button onClick={()=>window.showForgotPass?.()} style={{background:'none',border:'none',color:'#1A6BC4',fontSize:'11px',cursor:'pointer',textDecoration:'underline'}}>Forgot Password?</button>
              <button onClick={()=>window.showSetupPass?.()} style={{background:'none',border:'none',color:'#6b6a64',fontSize:'11px',cursor:'pointer',textDecoration:'underline'}}>Change Password</button>
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:'16px',fontSize:'10px',color:'#8AAAC8'}}>© Livio Building Systems · Secure Access</div>
        </div>
      </div>

      {/* ══ CHANGE PASSWORD ═════════════════════════════════════════ */}
      <div id="setup-pass-screen" style={{display:'none',position:'fixed',inset:0,zIndex:10000,background:'rgba(0,0,0,.75)',alignItems:'center',justifyContent:'center'}}>
        <div style={{background:'#fff',borderRadius:'14px',padding:'28px',width:'100%',maxWidth:'360px',margin:'20px',boxShadow:'0 20px 60px rgba(0,0,0,.5)'}}>
          <div style={{fontSize:'17px',fontWeight:700,color:'#0C1B2E',marginBottom:'4px'}}>Change Password</div>
          <div style={{fontSize:'11px',color:'#6b6a64',marginBottom:'18px'}}>Verify current credentials to set a new password</div>
          <div id="setup-error" style={{display:'none',background:'#FFF0F0',border:'1px solid #F5C0C0',color:'#9B1F1F',fontSize:'11px',padding:'8px 12px',borderRadius:'6px',marginBottom:'12px'}}></div>
          <div style={{marginBottom:'11px'}}><label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'4px'}}>Current Username</label><input id="setup-user" type="text" style={{width:'100%',padding:'9px 12px',border:'1px solid #e0ddd5',borderRadius:'6px',fontSize:'12px',outline:'none',boxSizing:'border-box'}}/></div>
          <div style={{marginBottom:'11px'}}><label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'4px'}}>Current Password</label><input id="setup-curr" type="password" style={{width:'100%',padding:'9px 12px',border:'1px solid #e0ddd5',borderRadius:'6px',fontSize:'12px',outline:'none',boxSizing:'border-box'}}/></div>
          <div style={{marginBottom:'11px'}}><label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'4px'}}>New Password</label><input id="setup-new" type="password" placeholder="Min 4 characters" style={{width:'100%',padding:'9px 12px',border:'1px solid #e0ddd5',borderRadius:'6px',fontSize:'12px',outline:'none',boxSizing:'border-box'}}/></div>
          <div style={{marginBottom:'18px'}}><label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'4px'}}>Confirm New Password</label><input id="setup-conf" type="password" style={{width:'100%',padding:'9px 12px',border:'1px solid #e0ddd5',borderRadius:'6px',fontSize:'12px',outline:'none',boxSizing:'border-box'}} onKeyDown={e=>{if(e.key==='Enter')window.doSetupPass?.()}}/></div>
          <div style={{display:'flex',gap:'8px'}}>
            <button onClick={()=>window.closeSetupPass?.()} style={{flex:1,padding:'10px',background:'#f5f4f0',border:'1px solid #e0ddd5',borderRadius:'7px',fontSize:'12px',cursor:'pointer'}}>Cancel</button>
            <button onClick={()=>window.doSetupPass?.()} style={{flex:2,padding:'10px',background:'#0C1B2E',color:'#fff',border:'none',borderRadius:'7px',fontSize:'13px',fontWeight:700,cursor:'pointer'}}>Update Password</button>
          </div>
        </div>
      </div>

      {/* ══ FORGOT PASSWORD ══════════════════════════════════════════ */}
      <div id="forgot-pass-screen" style={{display:'none',position:'fixed',inset:0,zIndex:10000,background:'rgba(0,0,0,.75)',alignItems:'center',justifyContent:'center'}}>
        <div style={{background:'#fff',borderRadius:'14px',padding:'28px',width:'100%',maxWidth:'380px',margin:'20px',boxShadow:'0 20px 60px rgba(0,0,0,.5)'}}>
          <div style={{fontSize:'17px',fontWeight:700,color:'#0C1B2E',marginBottom:'3px'}}>Forgot Password?</div>
          <div style={{fontSize:'11px',color:'#6b6a64',marginBottom:'18px'}}>Enter your username and registered email — we'll send a reset link.</div>
          <div id="forgot-error" style={{display:'none',background:'#FFF0F0',border:'1px solid #F5C0C0',color:'#9B1F1F',fontSize:'11px',padding:'8px 12px',borderRadius:'6px',marginBottom:'12px'}}></div>
          <div id="forgot-success" style={{display:'none',background:'#EDF8E5',border:'1px solid #B8DCA0',color:'#2D6A0F',fontSize:'11px',padding:'10px 12px',borderRadius:'6px',marginBottom:'12px'}}></div>
          <div style={{marginBottom:'12px'}}>
            <label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'4px'}}>Username</label>
            <input id="forgot-user" type="text" placeholder="Enter your username" style={{width:'100%',padding:'9px 12px',border:'1px solid #e0ddd5',borderRadius:'6px',fontSize:'12px',outline:'none',boxSizing:'border-box'}} onFocus={e=>e.target.style.borderColor='#1A6BC4'} onBlur={e=>e.target.style.borderColor='#e0ddd5'}/>
          </div>
          <div style={{marginBottom:'18px'}}>
            <label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'4px'}}>Registered Email Address</label>
            <input id="forgot-email" type="email" placeholder="Enter your registered email" style={{width:'100%',padding:'9px 12px',border:'1px solid #e0ddd5',borderRadius:'6px',fontSize:'12px',outline:'none',boxSizing:'border-box'}} onFocus={e=>e.target.style.borderColor='#1A6BC4'} onBlur={e=>e.target.style.borderColor='#e0ddd5'} onKeyDown={e=>{if(e.key==='Enter')window.doForgotPass?.()}}/>
          </div>
          <div style={{display:'flex',gap:'8px'}}>
            <button onClick={()=>window.closeForgotPass?.()} style={{flex:1,padding:'10px',background:'#f5f4f0',border:'1px solid #e0ddd5',borderRadius:'7px',fontSize:'12px',cursor:'pointer'}}>Cancel</button>
            <button onClick={()=>window.doForgotPass?.()} style={{flex:2,padding:'10px',background:'#0C1B2E',color:'#fff',border:'none',borderRadius:'7px',fontSize:'13px',fontWeight:700,cursor:'pointer'}}>Send Reset Link →</button>
          </div>
          <div style={{marginTop:'12px',textAlign:'center'}}>
            <button id="forgot-reset-btn" onClick={()=>window.showResetPass?.()} style={{display:'none',background:'none',border:'none',color:'#1A6BC4',fontSize:'11px',cursor:'pointer',textDecoration:'underline'}}>I have a reset code → Set New Password</button>
          </div>
        </div>
      </div>

      {/* ══ RESET PASSWORD ═══════════════════════════════════════════ */}
      <div id="reset-pass-screen" style={{display:'none',position:'fixed',inset:0,zIndex:10000,background:'rgba(0,0,0,.75)',alignItems:'center',justifyContent:'center'}}>
        <div style={{background:'#fff',borderRadius:'14px',padding:'28px',width:'100%',maxWidth:'380px',margin:'20px',boxShadow:'0 20px 60px rgba(0,0,0,.5)'}}>
          <div style={{fontSize:'17px',fontWeight:700,color:'#0C1B2E',marginBottom:'3px'}}>Set New Password</div>
          <div style={{fontSize:'11px',color:'#6b6a64',marginBottom:'18px'}}>Enter the reset code from your email and choose a new password.</div>
          <div id="reset-error" style={{display:'none',background:'#FFF0F0',border:'1px solid #F5C0C0',color:'#9B1F1F',fontSize:'11px',padding:'8px 12px',borderRadius:'6px',marginBottom:'12px'}}></div>
          <div style={{marginBottom:'11px'}}>
            <label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'4px'}}>Username</label>
            <input id="reset-user" type="text" style={{width:'100%',padding:'9px 12px',border:'1px solid #e0ddd5',borderRadius:'6px',fontSize:'12px',outline:'none',boxSizing:'border-box'}}/>
          </div>
          <div style={{marginBottom:'11px'}}>
            <label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'4px'}}>Reset Code (from email)</label>
            <input id="reset-code" type="text" placeholder="6-digit code" style={{width:'100%',padding:'9px 12px',border:'1px solid #e0ddd5',borderRadius:'6px',fontSize:'12px',outline:'none',boxSizing:'border-box',letterSpacing:'3px',fontWeight:700}}/>
          </div>
          <div style={{marginBottom:'11px'}}>
            <label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'4px'}}>New Password</label>
            <input id="reset-new" type="password" placeholder="Min 4 characters" style={{width:'100%',padding:'9px 12px',border:'1px solid #e0ddd5',borderRadius:'6px',fontSize:'12px',outline:'none',boxSizing:'border-box'}}/>
          </div>
          <div style={{marginBottom:'18px'}}>
            <label style={{fontSize:'11px',fontWeight:600,color:'#333',display:'block',marginBottom:'4px'}}>Confirm New Password</label>
            <input id="reset-conf" type="password" style={{width:'100%',padding:'9px 12px',border:'1px solid #e0ddd5',borderRadius:'6px',fontSize:'12px',outline:'none',boxSizing:'border-box'}} onKeyDown={e=>{if(e.key==='Enter')window.doResetPass?.()}}/>
          </div>
          <div style={{display:'flex',gap:'8px'}}>
            <button onClick={()=>window.closeResetPass?.()} style={{flex:1,padding:'10px',background:'#f5f4f0',border:'1px solid #e0ddd5',borderRadius:'7px',fontSize:'12px',cursor:'pointer'}}>Cancel</button>
            <button onClick={()=>window.doResetPass?.()} style={{flex:2,padding:'10px',background:'#0C1B2E',color:'#fff',border:'none',borderRadius:'7px',fontSize:'13px',fontWeight:700,cursor:'pointer'}}>Reset Password</button>
          </div>
          <div style={{marginTop:'12px',textAlign:'center'}}><button onClick={()=>{window.closeForgotPass?.();window.closeResetPass?.();}} style={{background:'none',border:'none',color:'#1A6BC4',fontSize:'10px',cursor:'pointer',textDecoration:'underline'}}>← Back to Sign In</button></div>
        </div>
      </div>
    </>
  );
}
