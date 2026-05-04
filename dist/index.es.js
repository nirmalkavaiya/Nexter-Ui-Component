(function(){"use strict";try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(`@import"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap";:root{--nxp-h: 36px;--nxp-h-sm: 28px;--nxp-h-lg: 40px;--nxp-radius: 6px;--nxp-radius-sm: 4px;--nxp-radius-lg: 12px;--nxp-radius-pill: 999px;--nxp-brand: #1E40AF;--nxp-brand-2: #4F46E5;--nxp-brand-soft: #EEF2FF;--nxp-brand-grad: linear-gradient(180deg, #1E40AF 0%, #4F46E5 100%);--nxp-bg: #fff;--nxp-bg-alt: #F8FAFC;--nxp-wash-hover: #F1F5F9;--nxp-wash-active: #EEF2FF;--nxp-text: #0F172A;--nxp-text-strong: #0B1220;--nxp-text-muted: #64748B;--nxp-text-faint: #94A3B8;--nxp-border: #E2E8F0;--nxp-border-strong: #CBD5E1;--nxp-success: #16A34A;--nxp-warning: #D97706;--nxp-error: #DC2626;--nxp-info: #2563EB;--nxp-shadow-sm: 0 1px 2px rgba(15, 23, 42, .06);--nxp-shadow: 0 1px 2px rgba(15, 23, 42, .08), 0 0 0 1px rgba(15, 23, 42, .06);--nxp-shadow-md: 0 4px 12px -4px rgba(15, 23, 42, .1);--nxp-shadow-lg: 0 12px 32px rgba(15, 23, 42, .12), 0 4px 8px rgba(15, 23, 42, .06);--nxp-ring: 0 0 0 2px rgba(30, 64, 175, .18);--nxp-ease: cubic-bezier(.16, 1, .3, 1);--nxp-dur-hover: .18s;--nxp-dur-active: .22s;--nxp-dur-motion: .24s;--nxp-font: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif}*,*:before,*:after{box-sizing:border-box}.nxp-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:var(--nxp-h);padding:0 14px;border-radius:var(--nxp-radius);font-family:var(--nxp-font);font-size:13.5px;font-weight:500;line-height:1;cursor:pointer;border:1px solid transparent;text-decoration:none;white-space:nowrap;transition:background var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease),border-color var(--nxp-dur-hover) var(--nxp-ease),box-shadow var(--nxp-dur-hover) var(--nxp-ease),opacity var(--nxp-dur-hover) var(--nxp-ease);position:relative;overflow:hidden}.nxp-btn:disabled,.nxp-btn--loading{opacity:.55;cursor:not-allowed;pointer-events:none}.nxp-btn--primary{background:var(--nxp-brand-grad);color:#fff;border-color:transparent;box-shadow:var(--nxp-shadow-sm)}.nxp-btn--primary:hover{background:linear-gradient(180deg,#1d3a9e,#4338ca);box-shadow:var(--nxp-shadow)}.nxp-btn--primary:active{background:linear-gradient(180deg,#1e3a8a,#3730a3)}.nxp-btn--primary:focus-visible{outline:none;box-shadow:var(--nxp-ring)}.nxp-btn--secondary{background:var(--nxp-bg);color:var(--nxp-text);border-color:var(--nxp-border-strong);box-shadow:var(--nxp-shadow-sm)}.nxp-btn--secondary:hover{background:var(--nxp-wash-hover);border-color:var(--nxp-border-strong)}.nxp-btn--secondary:active{background:var(--nxp-wash-active)}.nxp-btn--secondary:focus-visible{outline:none;box-shadow:var(--nxp-ring)}.nxp-btn--ghost{background:transparent;color:var(--nxp-text-muted);border-color:transparent}.nxp-btn--ghost:hover{background:var(--nxp-wash-hover);color:var(--nxp-text)}.nxp-btn--ghost:active{background:var(--nxp-wash-active)}.nxp-btn--ghost:focus-visible{outline:none;box-shadow:var(--nxp-ring)}.nxp-btn--destructive{background:var(--nxp-error);color:#fff;border-color:transparent;box-shadow:var(--nxp-shadow-sm)}.nxp-btn--destructive:hover{background:#b91c1c;box-shadow:var(--nxp-shadow)}.nxp-btn--destructive:active{background:#991b1b}.nxp-btn--destructive:focus-visible{outline:none;box-shadow:0 0 0 2px #dc262640}.nxp-btn--link{background:transparent;color:var(--nxp-brand);border-color:transparent;padding:0;height:auto;text-decoration:underline;text-underline-offset:2px}.nxp-btn--link:hover{color:var(--nxp-brand-2)}.nxp-btn--link:focus-visible{outline:none;box-shadow:var(--nxp-ring);border-radius:2px}.nxp-btn--sm{height:var(--nxp-h-sm);padding:0 10px;font-size:12px;border-radius:var(--nxp-radius-sm)}.nxp-btn--lg{height:var(--nxp-h-lg);padding:0 20px;font-size:14.5px}.nxp-btn--icon{width:var(--nxp-h);padding:0}.nxp-btn--sm.nxp-btn--icon{width:var(--nxp-h-sm)}.nxp-btn--lg.nxp-btn--icon{width:var(--nxp-h-lg)}.nxp-btn--loading .nxp-btn__spinner{display:inline-block;width:13px;height:13px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:nxp-spin .6s linear infinite}.nxp-gear--ghost{background:transparent;border:none;color:var(--nxp-text-muted);cursor:pointer;padding:4px;border-radius:var(--nxp-radius-sm);display:inline-flex;align-items:center;justify-content:center;transition:background var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-gear--ghost:hover{background:var(--nxp-wash-hover);color:var(--nxp-text)}.nxp-field{display:flex;flex-direction:column;gap:6px}.nxp-field__label-row{display:flex;align-items:center;gap:5px}.nxp-field__label{font-family:var(--nxp-font);font-size:13px;font-weight:500;color:var(--nxp-text);line-height:1.4}.nxp-field__required{color:var(--nxp-error)}.nxp-field__tooltip-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--nxp-text-muted);cursor:pointer;border-radius:50%;padding:1px;transition:color .15s;outline:none;flex-shrink:0}.nxp-field__tooltip-icon:hover,.nxp-field__tooltip-icon:focus-visible{color:var(--nxp-brand)}.nxp-field__hint{font-family:var(--nxp-font);font-size:12px;color:var(--nxp-text-muted);line-height:1.4}.nxp-field__error{font-family:var(--nxp-font);font-size:12px;color:var(--nxp-error);line-height:1.4}.nxp-input{height:var(--nxp-h);width:100%;padding:0 10px;border:1px solid var(--nxp-border-strong);border-radius:var(--nxp-radius);background:var(--nxp-bg);color:var(--nxp-text);font-family:var(--nxp-font);font-size:13.5px;transition:border-color var(--nxp-dur-hover) var(--nxp-ease),box-shadow var(--nxp-dur-hover) var(--nxp-ease);outline:none}.nxp-input::placeholder{color:var(--nxp-text-faint)}.nxp-input:hover{border-color:var(--nxp-border-strong)}.nxp-input:focus{border-color:var(--nxp-brand);box-shadow:var(--nxp-ring)}.nxp-input:disabled{opacity:.55;cursor:not-allowed;background:var(--nxp-bg-alt)}.nxp-input[aria-invalid=true],.nxp-input--invalid{border-color:var(--nxp-error)}.nxp-input[aria-invalid=true]:focus,.nxp-input--invalid:focus{box-shadow:0 0 0 2px #dc26262e}.nxp-select{height:var(--nxp-h);width:100%;padding:0 32px 0 10px;border:1px solid var(--nxp-border-strong);border-radius:var(--nxp-radius);background:var(--nxp-bg) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 12 12'%3E%3Cpath stroke='%2364748B' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M3 4.5l3 3 3-3'/%3E%3C/svg%3E") no-repeat right 10px center;color:var(--nxp-text);font-family:var(--nxp-font);font-size:13.5px;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;transition:border-color var(--nxp-dur-hover) var(--nxp-ease),box-shadow var(--nxp-dur-hover) var(--nxp-ease)}.nxp-select:focus{border-color:var(--nxp-brand);box-shadow:var(--nxp-ring)}.nxp-select:disabled{opacity:.55;cursor:not-allowed}.nxp-textarea{position:relative;width:100%}.nxp-textarea__control{display:block;width:100%;min-height:96px;padding:10px 12px;border:1px solid var(--nxp-border-strong);border-radius:var(--nxp-radius-lg, 8px);background:var(--nxp-bg);color:var(--nxp-text);font-family:var(--nxp-font);font-size:13.5px;line-height:1.6;resize:vertical;outline:none;box-sizing:border-box;transition:border-color var(--nxp-dur-hover) var(--nxp-ease),box-shadow var(--nxp-dur-hover) var(--nxp-ease)}.nxp-textarea__control::placeholder{color:var(--nxp-text-faint)}.nxp-textarea__control:hover:not(:disabled){border-color:#cbd5e1}.nxp-textarea__control:focus{border-color:var(--nxp-brand);box-shadow:var(--nxp-ring)}.nxp-textarea__control:disabled{opacity:.55;cursor:not-allowed;background:var(--nxp-bg-alt);resize:none}.nxp-textarea--invalid .nxp-textarea__control{border-color:var(--nxp-error)}.nxp-textarea--invalid .nxp-textarea__control:focus{box-shadow:0 0 0 2px #dc26262e}.nxp-textarea__count{display:block;text-align:right;font-family:var(--nxp-font);font-size:11.5px;color:var(--nxp-text-muted);margin-top:3px}.nxp-toggle{display:inline-flex;align-items:center;gap:8px;cursor:pointer;-webkit-user-select:none;user-select:none;font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text)}.nxp-toggle.is-disabled{opacity:.55;cursor:not-allowed}.nxp-toggle__track{position:relative;width:36px;height:20px;border-radius:var(--nxp-radius-pill);background:var(--nxp-border-strong);transition:background var(--nxp-dur-hover) var(--nxp-ease);flex-shrink:0}.nxp-toggle.is-checked .nxp-toggle__track{background:var(--nxp-brand)}.nxp-toggle--success.is-checked .nxp-toggle__track{background:var(--nxp-success)}.nxp-toggle__thumb{position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:var(--nxp-shadow-sm);transition:transform var(--nxp-dur-hover) var(--nxp-ease)}.nxp-toggle.is-checked .nxp-toggle__thumb{transform:translate(16px)}.nxp-toggle:focus-within .nxp-toggle__track{box-shadow:var(--nxp-ring)}.nxp-checkbox{display:inline-flex;align-items:center;gap:8px;cursor:pointer;-webkit-user-select:none;user-select:none;font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text)}.nxp-checkbox.is-disabled{opacity:.55;cursor:not-allowed}.nxp-checkbox__box{width:16px;height:16px;border-radius:var(--nxp-radius-sm);border:1.5px solid var(--nxp-border-strong);background:var(--nxp-bg);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background var(--nxp-dur-hover) var(--nxp-ease),border-color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-checkbox.is-checked .nxp-checkbox__box{background:var(--nxp-brand);border-color:var(--nxp-brand)}.nxp-checkbox__check{display:none;width:9px;height:7px}.nxp-checkbox.is-checked .nxp-checkbox__check{display:block}.nxp-checkbox:focus-within .nxp-checkbox__box{box-shadow:var(--nxp-ring)}.nxp-radio{display:inline-flex;align-items:center;gap:8px;cursor:pointer;-webkit-user-select:none;user-select:none;font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text)}.nxp-radio.is-disabled{opacity:.55;cursor:not-allowed}.nxp-radio__dot{width:16px;height:16px;border-radius:50%;border:1.5px solid var(--nxp-border-strong);background:var(--nxp-bg);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background var(--nxp-dur-hover) var(--nxp-ease),border-color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-radio.is-checked .nxp-radio__dot{border-color:var(--nxp-brand);background:var(--nxp-brand)}.nxp-radio__inner{width:6px;height:6px;border-radius:50%;background:#fff;opacity:0;transition:opacity var(--nxp-dur-hover) var(--nxp-ease)}.nxp-radio.is-checked .nxp-radio__inner{opacity:1}.nxp-radio:focus-within .nxp-radio__dot{box-shadow:var(--nxp-ring)}.nxp-dropdown{position:relative;display:inline-block}.nxp-dropdown__trigger{display:inline-flex;align-items:center;gap:6px;height:var(--nxp-h);padding:0 10px;border:1px solid var(--nxp-border-strong);border-radius:var(--nxp-radius);background:var(--nxp-bg);color:var(--nxp-text);font-family:var(--nxp-font);font-size:13.5px;cursor:pointer;white-space:nowrap;min-width:160px;justify-content:space-between;transition:background var(--nxp-dur-hover) var(--nxp-ease),border-color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-dropdown__trigger:hover{background:var(--nxp-wash-hover)}.nxp-dropdown__trigger:focus-visible{outline:none;box-shadow:var(--nxp-ring)}.nxp-dropdown__trigger:disabled{opacity:.55;cursor:not-allowed}.nxp-dropdown__chevron{width:14px;height:14px;color:var(--nxp-text-muted);transition:transform var(--nxp-dur-hover) var(--nxp-ease);flex-shrink:0}.nxp-dropdown.is-open .nxp-dropdown__chevron{transform:rotate(180deg)}.nxp-dropdown__menu{position:absolute;top:calc(100% + 4px);left:0;min-width:100%;background:var(--nxp-bg);border:1px solid var(--nxp-border);border-radius:var(--nxp-radius);box-shadow:var(--nxp-shadow-md);z-index:999;padding:4px;animation:nxp-dropdown-in var(--nxp-dur-motion) var(--nxp-ease);max-height:260px;overflow-y:auto}.nxp-dropdown__item{display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:var(--nxp-radius-sm);font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text);cursor:pointer;transition:background var(--nxp-dur-hover) var(--nxp-ease);-webkit-user-select:none;user-select:none}.nxp-dropdown__item:hover,.nxp-dropdown__item.is-focused{background:var(--nxp-wash-hover)}.nxp-dropdown__item.is-selected{color:var(--nxp-brand);font-weight:500}.nxp-dropdown__sub{font-size:11px;color:var(--nxp-text-muted);margin-left:auto}.nxp-dropdown__divider{height:1px;background:var(--nxp-border);margin:4px 0}.nxp-dropdown__check{width:14px;height:14px;color:var(--nxp-brand);margin-left:auto;flex-shrink:0}@keyframes nxp-dropdown-in{0%{opacity:0;transform:translateY(-6px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}.nxp-tabs{display:flex;flex-direction:column;gap:16px}.nxp-tabs__list{display:flex;align-items:center;gap:2px;background:var(--nxp-bg-alt);border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-lg);padding:3px;width:fit-content}.nxp-tabs__tab{height:30px;padding:0 14px;border-radius:calc(var(--nxp-radius-lg) - 3px);font-family:var(--nxp-font);font-size:13px;font-weight:500;color:var(--nxp-text-muted);cursor:pointer;border:none;background:transparent;transition:background var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease),box-shadow var(--nxp-dur-hover) var(--nxp-ease);white-space:nowrap}.nxp-tabs__tab:hover{color:var(--nxp-text);background:var(--nxp-wash-hover)}.nxp-tabs__tab.is-active{background:var(--nxp-bg);color:var(--nxp-text-strong);box-shadow:var(--nxp-shadow-sm)}.nxp-tabs__tab:focus-visible{outline:none;box-shadow:var(--nxp-ring)}.nxp-tabs--underline .nxp-tabs__list{background:transparent;border:none;border-bottom:2px solid var(--nxp-border);border-radius:0;padding:0;gap:0}.nxp-tabs--underline .nxp-tabs__tab{border-radius:0;border-bottom:2px solid transparent;margin-bottom:-2px;padding:0 16px;height:36px}.nxp-tabs--underline .nxp-tabs__tab.is-active{background:transparent;color:var(--nxp-brand);box-shadow:none;border-bottom-color:var(--nxp-brand)}.nxp-tabs--vertical{flex-direction:row;gap:24px}.nxp-tabs--vertical .nxp-tabs__list{flex-direction:column;width:180px;flex-shrink:0;background:var(--nxp-bg-alt);border-radius:var(--nxp-radius-lg);height:fit-content}.nxp-tabs--vertical .nxp-tabs__tab{width:100%;text-align:left;justify-content:flex-start;display:flex}.nxp-tabs--vertical .nxp-tabs__content{flex:1}.nxp-tabs__sub-list{display:flex;flex-direction:column;gap:2px;padding-left:12px;margin-top:2px}.nxp-tabs__sub{font-size:12px;padding:5px 10px;color:var(--nxp-text-muted);cursor:pointer;border-radius:var(--nxp-radius-sm);border:none;background:transparent;font-family:var(--nxp-font);font-weight:500;transition:background var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-tabs__sub:hover{background:var(--nxp-wash-hover);color:var(--nxp-text)}.nxp-tabs__sub.is-active{background:var(--nxp-wash-active);color:var(--nxp-brand)}.nxp-tabs__panel{width:100%}.nxp-tag{display:inline-flex;align-items:center;gap:4px;height:20px;padding:0 8px;border-radius:var(--nxp-radius-pill);font-family:var(--nxp-font);font-size:11.5px;font-weight:500;white-space:nowrap;background:var(--nxp-bg-alt);color:var(--nxp-text-muted);border:1px solid var(--nxp-border)}.nxp-tag--primary{background:var(--nxp-brand-soft);color:var(--nxp-brand);border-color:#1e40af26}.nxp-tag--success{background:#f0fdf4;color:var(--nxp-success);border-color:#16a34a26}.nxp-tag--warning{background:#fffbeb;color:var(--nxp-warning);border-color:#d9770626}.nxp-tag--error{background:#fef2f2;color:var(--nxp-error);border-color:#dc262626}.nxp-badge{display:inline-flex;align-items:center;height:18px;padding:0 6px;border-radius:var(--nxp-radius-pill);font-family:var(--nxp-font);font-size:11px;font-weight:600;white-space:nowrap;background:var(--nxp-border);color:var(--nxp-text-muted)}.nxp-badge--primary{background:var(--nxp-brand-soft);color:var(--nxp-brand)}.nxp-badge--success{background:#f0fdf4;color:var(--nxp-success)}.nxp-badge--warning{background:#fffbeb;color:var(--nxp-warning)}.nxp-badge--error{background:#fef2f2;color:var(--nxp-error)}.nxp-badge--gradient{background:var(--nxp-brand-grad);color:#fff}.nxp-alert{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border-radius:var(--nxp-radius);border:1px solid var(--nxp-border);background:var(--nxp-bg-alt);font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text);line-height:1.5}.nxp-alert__icon{font-size:15px;flex-shrink:0;margin-top:1px;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700}.nxp-alert__body{flex:1}.nxp-alert--info{background:#eff6ff;border-color:#2563eb33;color:#1e3a8a}.nxp-alert--info .nxp-alert__icon{background:var(--nxp-info);color:#fff}.nxp-alert--success{background:#f0fdf4;border-color:#16a34a33;color:#14532d}.nxp-alert--success .nxp-alert__icon{background:var(--nxp-success);color:#fff}.nxp-alert--warning{background:#fffbeb;border-color:#d9770633;color:#78350f}.nxp-alert--warning .nxp-alert__icon{background:var(--nxp-warning);color:#fff}.nxp-alert--error{background:#fef2f2;border-color:#dc262633;color:#7f1d1d}.nxp-alert--error .nxp-alert__icon{background:var(--nxp-error);color:#fff}.nxp-notice{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border-radius:var(--nxp-radius);border-left:3px solid var(--nxp-border-strong);background:var(--nxp-bg);box-shadow:var(--nxp-shadow-sm);font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text);line-height:1.5;transition:opacity var(--nxp-dur-motion) var(--nxp-ease),transform var(--nxp-dur-motion) var(--nxp-ease)}.nxp-notice.is-dismissing{opacity:0;transform:translate(8px);pointer-events:none}.nxp-notice__icon{flex-shrink:0;margin-top:1px;font-size:15px}.nxp-notice__body{flex:1}.nxp-notice__close{background:none;border:none;cursor:pointer;color:var(--nxp-text-muted);padding:2px;border-radius:var(--nxp-radius-sm);display:flex;align-items:center;justify-content:center;font-size:16px;line-height:1;transition:background var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-notice__close:hover{background:var(--nxp-wash-hover);color:var(--nxp-text)}.nxp-notice--success{border-left-color:var(--nxp-success)}.nxp-notice--warning{border-left-color:var(--nxp-warning)}.nxp-notice--error{border-left-color:var(--nxp-error)}.nxp-notice--info{border-left-color:var(--nxp-info)}.nxp-toast{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border-radius:var(--nxp-radius-lg);background:var(--nxp-text);color:#e2e8f0;box-shadow:var(--nxp-shadow-lg);font-family:var(--nxp-font);font-size:13.5px;min-width:260px;max-width:380px;line-height:1.4}.nxp-toast--error{background:var(--nxp-error);color:#fff}.nxp-toast__icon{font-size:16px;flex-shrink:0;margin-top:1px}.nxp-toast__body{flex:1}.nxp-toast__title{font-weight:600;color:#fff;margin-bottom:2px}.nxp-toast__desc{font-size:12.5px;color:#94a3b8}.nxp-toast--error .nxp-toast__desc{color:#ffffffbf}.nxp-toast__close{background:none;border:none;cursor:pointer;color:#fff9;padding:2px;font-size:16px;line-height:1;transition:color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-toast__close:hover{color:#fff}.nxp-banner{display:flex;align-items:flex-start;gap:12px;padding:16px 20px;border-radius:var(--nxp-radius-lg);background:var(--nxp-brand-soft);border:1px solid rgba(30,64,175,.15);font-family:var(--nxp-font);color:var(--nxp-text)}.nxp-banner--success{background:#f0fdf4;border-color:#16a34a26}.nxp-banner--warning{background:#fffbeb;border-color:#d9770626}.nxp-banner--error{background:#fef2f2;border-color:#dc262626}.nxp-banner__icon{font-size:20px;flex-shrink:0;margin-top:2px}.nxp-banner__body{flex:1}.nxp-banner__title{font-size:14px;font-weight:600;color:var(--nxp-text-strong);margin-bottom:4px}.nxp-banner__text{font-size:13.5px;color:var(--nxp-text-muted);line-height:1.5;margin-bottom:0}.nxp-banner__actions{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}.nxp-progress{width:100%;height:6px;background:var(--nxp-border);border-radius:var(--nxp-radius-pill);overflow:hidden}.nxp-progress__bar{height:100%;background:var(--nxp-brand-grad);border-radius:var(--nxp-radius-pill);transition:width var(--nxp-dur-motion) var(--nxp-ease)}.nxp-progress--success .nxp-progress__bar{background:var(--nxp-success)}.nxp-progress--warning .nxp-progress__bar{background:var(--nxp-warning)}.nxp-skeleton{display:inline-block;background:linear-gradient(90deg,var(--nxp-border) 25%,var(--nxp-wash-hover) 50%,var(--nxp-border) 75%);background-size:200% 100%;animation:nxp-shimmer 1.4s ease infinite;border-radius:var(--nxp-radius);height:14px}.nxp-skeleton--circle{border-radius:50%;width:36px;height:36px}.nxp-skeleton--title{height:20px;width:60%}@keyframes nxp-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.nxp-spinner{display:inline-block;width:20px;height:20px;border:2.5px solid var(--nxp-border);border-top-color:var(--nxp-brand);border-radius:50%;animation:nxp-spin .65s linear infinite}.nxp-spinner--sm{width:14px;height:14px;border-width:2px}.nxp-spinner--lg{width:28px;height:28px;border-width:3px}@keyframes nxp-spin{to{transform:rotate(360deg)}}.nxp-modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:#0f172a73;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px}.nxp-modal{background:var(--nxp-bg);border-radius:var(--nxp-radius-lg);box-shadow:var(--nxp-shadow-lg);width:100%;max-width:520px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;animation:nxp-modal-in var(--nxp-dur-motion) var(--nxp-ease);position:relative}.nxp-modal:before{content:"";display:block;height:3px;background:var(--nxp-brand-grad);position:absolute;top:0;left:0;right:0}.nxp-modal--sm{max-width:380px}.nxp-modal--lg{max-width:680px}.nxp-modal--xl{max-width:860px}.nxp-modal__head{display:flex;align-items:flex-start;gap:12px;padding:24px 20px 16px;border-bottom:1px solid var(--nxp-border)}.nxp-modal__title{font-family:var(--nxp-font);font-size:15px;font-weight:600;color:var(--nxp-text-strong);flex:1}.nxp-modal__byline{font-family:var(--nxp-font);font-size:12.5px;color:var(--nxp-text-muted);margin-top:3px}.nxp-modal__body{padding:20px;overflow-y:auto;flex:1;font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text);line-height:1.6}.nxp-modal__foot{display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:14px 20px;border-top:1px solid var(--nxp-border);background:var(--nxp-bg-alt)}.nxp-modal__close{background:none;border:none;cursor:pointer;color:var(--nxp-text-muted);padding:4px;border-radius:var(--nxp-radius-sm);display:flex;align-items:center;justify-content:center;font-size:18px;line-height:1;transition:background var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease);flex-shrink:0}.nxp-modal__close:hover{background:var(--nxp-wash-hover);color:var(--nxp-text)}@keyframes nxp-modal-in{0%{opacity:0;transform:scale(.95) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}.nxp-dialog{background:var(--nxp-bg);border-radius:var(--nxp-radius-lg);box-shadow:var(--nxp-shadow-lg);padding:24px;max-width:380px;width:100%;font-family:var(--nxp-font);border:1px solid var(--nxp-border);text-align:center}.nxp-dialog__icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;margin:0 auto 14px;background:var(--nxp-bg-alt);border:1px solid var(--nxp-border)}.nxp-dialog__icon--warning{background:#fffbeb;border-color:#d9770633;color:var(--nxp-warning)}.nxp-dialog__icon--error{background:#fef2f2;border-color:#dc262633;color:var(--nxp-error)}.nxp-dialog__icon--info{background:#eff6ff;border-color:#2563eb33;color:var(--nxp-info)}.nxp-dialog__icon--success{background:#f0fdf4;border-color:#16a34a33;color:var(--nxp-success)}.nxp-dialog__title{font-size:15px;font-weight:600;color:var(--nxp-text-strong);margin-bottom:8px}.nxp-dialog__desc{font-size:13.5px;color:var(--nxp-text-muted);line-height:1.55;margin-bottom:20px}.nxp-dialog__actions{display:flex;align-items:center;justify-content:center;gap:8px}.nxp-sheet{background:var(--nxp-bg);border-radius:var(--nxp-radius-lg);border:1px solid var(--nxp-border);box-shadow:var(--nxp-shadow-sm);overflow:hidden;font-family:var(--nxp-font)}.nxp-sheet__head{padding:16px 20px;border-bottom:1px solid var(--nxp-border)}.nxp-sheet__title{font-size:14px;font-weight:600;color:var(--nxp-text-strong)}.nxp-sheet__byline{font-size:12.5px;color:var(--nxp-text-muted);margin-top:2px}.nxp-sheet__body{padding:20px;font-size:13.5px;color:var(--nxp-text);line-height:1.6}.nxp-sheet__foot{padding:14px 20px;border-top:1px solid var(--nxp-border);background:var(--nxp-bg-alt);display:flex;align-items:center;justify-content:flex-end;gap:8px}.nxp-popover{background:var(--nxp-bg);border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-lg);box-shadow:var(--nxp-shadow-md);padding:14px 16px;min-width:200px;max-width:280px;font-family:var(--nxp-font);font-size:13px}.nxp-popover__title{font-size:13px;font-weight:600;color:var(--nxp-text-strong);margin-bottom:6px}.nxp-popover__desc{font-size:12.5px;color:var(--nxp-text-muted);line-height:1.5}.nxp-popover__footer{margin-top:10px;padding-top:10px;border-top:1px solid var(--nxp-border);display:flex;gap:6px}.nxp-slider{display:flex;flex-direction:column;gap:8px;font-family:var(--nxp-font);width:100%}.nxp-slider--disabled{opacity:.55;pointer-events:none}.nxp-slider__header{display:flex;align-items:center;justify-content:space-between;gap:8px}.nxp-slider__label{font-size:13px;font-weight:500;color:var(--nxp-brand);cursor:default;flex-shrink:0}.nxp-slider__controls{display:flex;align-items:center;gap:4px;margin-left:auto}.nxp-slider__unit-select{height:28px;padding:0 6px;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-sm);background:var(--nxp-bg);color:var(--nxp-text);font-family:var(--nxp-font);font-size:12px;font-weight:500;cursor:pointer;outline:none;transition:border-color .15s,box-shadow .15s;-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}.nxp-slider__unit-select:focus-visible{border-color:var(--nxp-brand);box-shadow:0 0 0 2px var(--nxp-brand-soft)}.nxp-slider__input-wrap{display:flex;align-items:center;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-sm);background:var(--nxp-bg);overflow:hidden;transition:border-color .15s,box-shadow .15s}.nxp-slider__input-wrap:focus-within{border-color:var(--nxp-brand);box-shadow:0 0 0 2px var(--nxp-brand-soft)}.nxp-slider__input{width:52px;height:28px;padding:0 6px;border:none;background:transparent;font-family:var(--nxp-font);font-size:13px;font-weight:500;color:var(--nxp-text);text-align:center;outline:none;-moz-appearance:textfield}.nxp-slider__input::-webkit-outer-spin-button,.nxp-slider__input::-webkit-inner-spin-button{-webkit-appearance:none}.nxp-slider__unit-suffix{padding:0 7px 0 2px;font-size:12px;font-weight:500;color:var(--nxp-text-muted);white-space:nowrap}.nxp-slider__range{width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:4px;border-radius:var(--nxp-radius-pill);background:linear-gradient(to right,var(--nxp-brand) 0%,var(--nxp-brand) calc(var(--val, 50) * 1%),var(--nxp-border) calc(var(--val, 50) * 1%),var(--nxp-border) 100%);outline:none;cursor:pointer}.nxp-slider__range::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--nxp-bg);border:2.5px solid var(--nxp-brand);box-shadow:var(--nxp-shadow-sm);cursor:grab;transition:transform var(--nxp-dur-hover) var(--nxp-ease)}.nxp-slider__range::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.15)}.nxp-slider__range:focus-visible{outline:none;box-shadow:0 0 0 3px var(--nxp-brand-soft);border-radius:var(--nxp-radius-pill)}.nxp-slider__range:disabled{cursor:not-allowed}.nxp-stepper{display:inline-flex;align-items:center;border:1px solid var(--nxp-border-strong);border-radius:var(--nxp-radius);overflow:hidden;background:var(--nxp-bg)}.nxp-stepper__btn{width:var(--nxp-h);height:var(--nxp-h);border:none;background:transparent;cursor:pointer;font-size:18px;color:var(--nxp-text-muted);display:flex;align-items:center;justify-content:center;transition:background var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease);flex-shrink:0}.nxp-stepper__btn:hover{background:var(--nxp-wash-hover);color:var(--nxp-text)}.nxp-stepper__btn:disabled{opacity:.4;cursor:not-allowed}.nxp-stepper__input{width:52px;height:var(--nxp-h);border:none;border-left:1px solid var(--nxp-border);border-right:1px solid var(--nxp-border);background:transparent;text-align:center;font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text);outline:none;-moz-appearance:textfield}.nxp-stepper__input::-webkit-inner-spin-button,.nxp-stepper__input::-webkit-outer-spin-button{-webkit-appearance:none}.nxp-segmented{display:inline-flex;align-items:center;background:var(--nxp-bg-alt);border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-lg);padding:3px;gap:2px}.nxp-segmented__option{padding:5px 14px;border-radius:calc(var(--nxp-radius-lg) - 3px);font-family:var(--nxp-font);font-size:13px;font-weight:500;color:var(--nxp-text-muted);cursor:pointer;border:none;background:transparent;transition:background var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease),box-shadow var(--nxp-dur-hover) var(--nxp-ease);white-space:nowrap}.nxp-segmented__option:hover{color:var(--nxp-text)}.nxp-segmented__option.is-selected{background:var(--nxp-bg);color:var(--nxp-text-strong);box-shadow:var(--nxp-shadow-sm)}.nxp-search{position:relative;display:inline-flex;align-items:center;width:100%}.nxp-search__icon{position:absolute;left:10px;color:var(--nxp-text-faint);font-size:15px;pointer-events:none}.nxp-search__input{width:100%;height:var(--nxp-h);padding:0 10px 0 32px;border:1px solid var(--nxp-border-strong);border-radius:var(--nxp-radius);background:var(--nxp-bg);color:var(--nxp-text);font-family:var(--nxp-font);font-size:13.5px;outline:none;transition:border-color var(--nxp-dur-hover) var(--nxp-ease),box-shadow var(--nxp-dur-hover) var(--nxp-ease)}.nxp-search__input::placeholder{color:var(--nxp-text-faint)}.nxp-search__input:focus{border-color:var(--nxp-brand);box-shadow:var(--nxp-ring)}.nxp-carousel{position:relative;width:100%;overflow:hidden;border-radius:var(--nxp-radius-lg)}.nxp-carousel__track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none;gap:0}.nxp-carousel__track::-webkit-scrollbar{display:none}.nxp-carousel__slide{min-width:100%;scroll-snap-align:start;background:var(--nxp-brand-grad);padding:40px;display:flex;flex-direction:column;gap:10px;color:#fff;border-radius:var(--nxp-radius-lg)}.nxp-carousel__eyebrow{font-family:var(--nxp-font);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#ffffffb3}.nxp-carousel__title{font-family:var(--nxp-font);font-size:22px;font-weight:700;color:#fff;line-height:1.3}.nxp-carousel__desc{font-family:var(--nxp-font);font-size:14px;color:#ffffffbf;line-height:1.5}.nxp-carousel__cta{margin-top:8px;display:inline-flex;align-items:center;gap:6px;background:#ffffff26;border:1px solid rgba(255,255,255,.25);color:#fff;padding:8px 16px;border-radius:var(--nxp-radius-pill);font-family:var(--nxp-font);font-size:13px;font-weight:500;text-decoration:none;cursor:pointer;transition:background var(--nxp-dur-hover) var(--nxp-ease);width:fit-content}.nxp-carousel__cta:hover{background:#ffffff40}.nxp-carousel__nav{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:12px}.nxp-carousel__btn{width:32px;height:32px;border-radius:50%;border:1px solid var(--nxp-border-strong);background:var(--nxp-bg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--nxp-text-muted);transition:background var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-carousel__btn:hover{background:var(--nxp-wash-hover);color:var(--nxp-text)}.nxp-carousel__btn:disabled{opacity:.4;cursor:not-allowed}.nxp-carousel__dots{display:flex;gap:6px;align-items:center}.nxp-carousel__dot{width:6px;height:6px;border-radius:50%;background:var(--nxp-border-strong);cursor:pointer;transition:background var(--nxp-dur-hover) var(--nxp-ease),transform var(--nxp-dur-hover) var(--nxp-ease);border:none;padding:0}.nxp-carousel__dot.is-active{background:var(--nxp-brand);transform:scale(1.3)}.nxp-accordion{display:flex;flex-direction:column;gap:0;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-lg);overflow:hidden}.nxp-accordion__item{border-bottom:1px solid var(--nxp-border)}.nxp-accordion__item:last-child{border-bottom:none}.nxp-accordion__head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;cursor:pointer;background:var(--nxp-bg);font-family:var(--nxp-font);font-size:14px;font-weight:500;color:var(--nxp-text);border:none;width:100%;text-align:left;transition:background var(--nxp-dur-hover) var(--nxp-ease)}.nxp-accordion__head:hover{background:var(--nxp-wash-hover)}.nxp-accordion__chevron{width:16px;height:16px;color:var(--nxp-text-muted);flex-shrink:0;transition:transform var(--nxp-dur-hover) var(--nxp-ease)}.nxp-accordion__item.is-open .nxp-accordion__chevron{transform:rotate(180deg)}.nxp-accordion__body{padding:0 16px 14px;font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text-muted);line-height:1.6;display:none;background:var(--nxp-bg)}.nxp-accordion__item.is-open .nxp-accordion__body{display:block}.nxp-combobox{position:relative;display:inline-block;width:100%}.nxp-combobox__input{width:100%;height:var(--nxp-h);padding:0 10px;border:1px solid var(--nxp-border-strong);border-radius:var(--nxp-radius);background:var(--nxp-bg);color:var(--nxp-text);font-family:var(--nxp-font);font-size:13.5px;outline:none;transition:border-color var(--nxp-dur-hover) var(--nxp-ease),box-shadow var(--nxp-dur-hover) var(--nxp-ease)}.nxp-combobox__input:focus{border-color:var(--nxp-brand);box-shadow:var(--nxp-ring)}.nxp-combobox__list{position:absolute;top:calc(100% + 4px);left:0;width:100%;background:var(--nxp-bg);border:1px solid var(--nxp-border);border-radius:var(--nxp-radius);box-shadow:var(--nxp-shadow-md);z-index:999;padding:4px;max-height:200px;overflow-y:auto;animation:nxp-dropdown-in var(--nxp-dur-motion) var(--nxp-ease)}.nxp-combobox__item{padding:7px 10px;border-radius:var(--nxp-radius-sm);font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text);cursor:pointer;transition:background var(--nxp-dur-hover) var(--nxp-ease)}.nxp-combobox__item:hover,.nxp-combobox__item.is-focused{background:var(--nxp-wash-hover)}.nxp-pagination{display:flex;align-items:center;gap:4px;font-family:var(--nxp-font)}.nxp-pagination__item{min-width:32px;height:32px;padding:0 6px;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius);background:var(--nxp-bg);color:var(--nxp-text-muted);font-size:13px;font-weight:500;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease),border-color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-pagination__item:hover{background:var(--nxp-wash-hover);color:var(--nxp-text)}.nxp-pagination__item.is-active{background:var(--nxp-brand);border-color:var(--nxp-brand);color:#fff}.nxp-pagination__item:disabled{opacity:.4;cursor:not-allowed}.nxp-pagination__item--prev,.nxp-pagination__item--next{font-size:15px}.nxp-table{width:100%;border-collapse:collapse;font-family:var(--nxp-font);font-size:13.5px;color:var(--nxp-text)}.nxp-table thead th{padding:10px 14px;background:var(--nxp-bg-alt);border-bottom:1px solid var(--nxp-border);text-align:left;font-size:12px;font-weight:600;color:var(--nxp-text-muted);white-space:nowrap}.nxp-table tbody td{padding:11px 14px;border-bottom:1px solid var(--nxp-border);color:var(--nxp-text);vertical-align:middle}.nxp-table tbody tr:last-child td{border-bottom:none}.nxp-table--striped tbody tr:nth-child(odd) td{background:var(--nxp-bg-alt)}.nxp-table tbody tr:hover td{background:var(--nxp-wash-hover)}.nxp-table__num{text-align:right;font-variant-numeric:tabular-nums}.nxp-table__actions{display:flex;align-items:center;gap:6px;justify-content:flex-end}.nxp-avatar{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:var(--nxp-brand-soft);color:var(--nxp-brand);font-family:var(--nxp-font);font-size:13px;font-weight:600;overflow:hidden;flex-shrink:0;border:2px solid var(--nxp-bg);box-shadow:var(--nxp-shadow-sm)}.nxp-avatar--sm{width:26px;height:26px;font-size:10px}.nxp-avatar--lg{width:48px;height:48px;font-size:17px}.nxp-avatar img{width:100%;height:100%;object-fit:cover;display:block}.nxp-kbd{display:inline-flex;align-items:center;height:22px;padding:0 7px;border-radius:var(--nxp-radius-sm);background:var(--nxp-bg-alt);border:1px solid var(--nxp-border-strong);border-bottom-width:2px;font-family:var(--nxp-font);font-size:11px;font-weight:500;color:var(--nxp-text-muted);box-shadow:var(--nxp-shadow-sm);white-space:nowrap}.nxp-tooltip-wrap{position:relative;display:inline-flex}.nxp-tooltip{position:fixed;z-index:9999;background:var(--nxp-text);color:#fff;font-family:var(--nxp-font);font-size:12px;line-height:1.5;padding:6px 10px;border-radius:var(--nxp-radius-sm);white-space:normal;max-width:240px;word-break:break-word;pointer-events:none;box-shadow:var(--nxp-shadow-md);animation:nxp-dropdown-in var(--nxp-dur-hover) var(--nxp-ease)}.nxp-stat{background:var(--nxp-bg);border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-lg);padding:18px 20px;font-family:var(--nxp-font);box-shadow:var(--nxp-shadow-sm)}.nxp-stat__label{font-size:12px;font-weight:500;color:var(--nxp-text-muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px}.nxp-stat__value{font-size:28px;font-weight:700;color:var(--nxp-text-strong);line-height:1;margin-bottom:6px}.nxp-stat__meta{font-size:12.5px;color:var(--nxp-text-muted)}.nxp-iconbox{background:var(--nxp-bg);border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-lg);padding:20px;font-family:var(--nxp-font);box-shadow:var(--nxp-shadow-sm);display:flex;flex-direction:column;gap:10px;transition:box-shadow var(--nxp-dur-hover) var(--nxp-ease),border-color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-iconbox:hover{box-shadow:var(--nxp-shadow-md);border-color:var(--nxp-border-strong)}.nxp-iconbox__topline{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--nxp-brand)}.nxp-iconbox__icon{width:40px;height:40px;border-radius:var(--nxp-radius);background:var(--nxp-brand-soft);display:flex;align-items:center;justify-content:center;font-size:20px}.nxp-iconbox__step{width:26px;height:26px;border-radius:50%;background:var(--nxp-brand-grad);color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700}.nxp-iconbox__title{font-size:14px;font-weight:600;color:var(--nxp-text-strong)}.nxp-iconbox__desc{font-size:13px;color:var(--nxp-text-muted);line-height:1.5}.nxp-iconbox__cta{font-size:13px;font-weight:500;color:var(--nxp-brand);text-decoration:none;display:inline-flex;align-items:center;gap:4px;margin-top:auto}.nxp-iconbox__cta:hover{text-decoration:underline}.nxp-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;font-family:var(--nxp-font);text-align:center;gap:10px}.nxp-empty__icon{font-size:36px;color:var(--nxp-text-faint);margin-bottom:4px}.nxp-empty__title{font-size:15px;font-weight:600;color:var(--nxp-text)}.nxp-empty__desc{font-size:13.5px;color:var(--nxp-text-muted);line-height:1.5;max-width:320px}.nxp-status{display:inline-flex;align-items:center;gap:6px;font-family:var(--nxp-font);font-size:12.5px;font-weight:500;color:var(--nxp-text-muted)}.nxp-status:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--nxp-text-faint);flex-shrink:0}.nxp-status--active{color:var(--nxp-success)}.nxp-status--active:before{background:var(--nxp-success);animation:nxp-pulse 1.5s ease infinite}.nxp-status--inactive{color:var(--nxp-text-muted)}.nxp-status--inactive:before{background:var(--nxp-text-faint)}.nxp-status--pending{color:var(--nxp-warning)}.nxp-status--pending:before{background:var(--nxp-warning)}.nxp-status--info{color:var(--nxp-info)}.nxp-status--info:before{background:var(--nxp-info)}@keyframes nxp-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(1.3)}}.nxp-u-stack{display:flex;flex-direction:column;gap:16px}.nxp-u-stack--sm{gap:8px}.nxp-u-row{display:flex;flex-direction:row;align-items:center;gap:16px;flex-wrap:wrap}.nxp-u-row--sm{gap:8px}.nxp-flex{display:flex}.nxp-inline-flex{display:inline-flex}.nxp-flex-row{flex-direction:row}.nxp-flex-col{flex-direction:column}.nxp-flex-row-reverse{flex-direction:row-reverse}.nxp-flex-col-reverse{flex-direction:column-reverse}.nxp-flex-wrap{flex-wrap:wrap}.nxp-flex-nowrap{flex-wrap:nowrap}.nxp-flex-wrap-reverse{flex-wrap:wrap-reverse}.nxp-items-start{align-items:flex-start}.nxp-items-center{align-items:center}.nxp-items-end{align-items:flex-end}.nxp-items-stretch{align-items:stretch}.nxp-items-baseline{align-items:baseline}.nxp-self-start{align-self:flex-start}.nxp-self-center{align-self:center}.nxp-self-end{align-self:flex-end}.nxp-self-stretch{align-self:stretch}.nxp-self-auto{align-self:auto}.nxp-content-start{align-content:flex-start}.nxp-content-center{align-content:center}.nxp-content-end{align-content:flex-end}.nxp-content-between{align-content:space-between}.nxp-content-around{align-content:space-around}.nxp-justify-start{justify-content:flex-start}.nxp-justify-center{justify-content:center}.nxp-justify-end{justify-content:flex-end}.nxp-justify-between{justify-content:space-between}.nxp-justify-around{justify-content:space-around}.nxp-justify-evenly{justify-content:space-evenly}.nxp-gap-0{gap:0}.nxp-gap-4{gap:4px}.nxp-gap-6{gap:6px}.nxp-gap-8{gap:8px}.nxp-gap-10{gap:10px}.nxp-gap-12{gap:12px}.nxp-gap-16{gap:16px}.nxp-gap-20{gap:20px}.nxp-gap-24{gap:24px}.nxp-gap-32{gap:32px}.nxp-gap-x-4{column-gap:4px}.nxp-gap-x-8{column-gap:8px}.nxp-gap-x-12{column-gap:12px}.nxp-gap-x-16{column-gap:16px}.nxp-gap-x-24{column-gap:24px}.nxp-gap-y-4{row-gap:4px}.nxp-gap-y-8{row-gap:8px}.nxp-gap-y-12{row-gap:12px}.nxp-gap-y-16{row-gap:16px}.nxp-gap-y-24{row-gap:24px}.nxp-flex-1{flex:1 1 0%}.nxp-flex-auto{flex:1 1 auto}.nxp-flex-none{flex:none}.nxp-flex-init{flex:0 1 auto}.nxp-grow{flex-grow:1}.nxp-grow-0{flex-grow:0}.nxp-shrink{flex-shrink:1}.nxp-shrink-0{flex-shrink:0}.nxp-order-first{order:-9999}.nxp-order-last{order:9999}.nxp-order-none{order:0}.nxp-order-1{order:1}.nxp-order-2{order:2}.nxp-order-3{order:3}.nxp-order-4{order:4}.nxp-order-5{order:5}.nxp-w-full{width:100%}.nxp-w-half{width:50%}.nxp-w-auto{width:auto}.nxp-w-fit{width:fit-content}.nxp-w-max{width:max-content}.nxp-w-min{width:min-content}.nxp-h-full{height:100%}.nxp-h-auto{height:auto}.nxp-h-screen{height:100vh}.nxp-h-fit{height:fit-content}.nxp-min-w-0{min-width:0}.nxp-max-w-full{max-width:100%}.nxp-min-h-0{min-height:0}.nxp-overflow-hidden{overflow:hidden}.nxp-overflow-auto{overflow:auto}.nxp-overflow-scroll{overflow:scroll}.nxp-overflow-x-auto{overflow-x:auto}.nxp-overflow-y-auto{overflow-y:auto}.nxp-overflow-x-hidden{overflow-x:hidden}.nxp-flex-center{display:flex;align-items:center;justify-content:center}.nxp-flex-between{display:flex;align-items:center;justify-content:space-between}.nxp-flex-col-center{display:flex;flex-direction:column;align-items:center}.nxp-flex-col-start{display:flex;flex-direction:column;align-items:flex-start}.nxp-flex-inline-center{display:inline-flex;align-items:center;gap:6px}.nxp-flex-sidebar{display:flex;align-items:flex-start;gap:24px}.nxp-flex-push-end{display:flex;flex-direction:column;justify-content:space-between}@media (max-width: 640px){.nxp-sm-flex-col{flex-direction:column}.nxp-sm-flex-row{flex-direction:row}.nxp-sm-flex-wrap{flex-wrap:wrap}.nxp-sm-items-start{align-items:flex-start}.nxp-sm-items-center{align-items:center}.nxp-sm-justify-start{justify-content:flex-start}.nxp-sm-w-full{width:100%}.nxp-sm-flex-1{flex:1}.nxp-sm-order-first{order:-9999}.nxp-sm-order-last{order:9999}.nxp-sm-hidden{display:none}}@media (min-width: 641px) and (max-width: 1024px){.nxp-md-flex-row{flex-direction:row}.nxp-md-flex-col{flex-direction:column}.nxp-md-flex-wrap{flex-wrap:wrap}.nxp-md-items-center{align-items:center}.nxp-md-justify-between{justify-content:space-between}.nxp-md-w-full{width:100%}.nxp-md-w-half{width:50%}.nxp-md-flex-1{flex:1}.nxp-md-hidden{display:none}}@media (min-width: 1025px){.nxp-lg-flex-row{flex-direction:row}.nxp-lg-flex-col{flex-direction:column}.nxp-lg-items-center{align-items:center}.nxp-lg-justify-between{justify-content:space-between}.nxp-lg-flex-1{flex:1}.nxp-lg-w-full{width:100%}.nxp-lg-hidden{display:none}}.nxp-ftc-outer{position:relative}.nxp-ftc-outer--has-plan{padding-top:10px}.nxp-ftc-plan{position:absolute;top:0;left:14px;z-index:1;display:inline-flex;align-items:center;padding:2px 8px;border-radius:20px;font-family:var(--nxp-font);font-size:9.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;line-height:1.6;white-space:nowrap}.nxp-ftc-plan--pro{background:var(--nxp-bg);border:1.5px solid var(--nxp-brand);color:var(--nxp-brand)}.nxp-ftc-plan--freemium{background:#f0f4ff;border:1.5px solid #c7d4f5;color:#4a6fa5}.nxp-ftc{background:var(--nxp-bg);border:1px solid var(--nxp-border);border-radius:10px;padding:14px 16px;font-family:var(--nxp-font);box-shadow:0 1px 3px #0000000d;transition:box-shadow var(--nxp-dur-hover) var(--nxp-ease),border-color var(--nxp-dur-hover) var(--nxp-ease)}.nxp-ftc:hover{box-shadow:0 2px 8px #00000014;border-color:var(--nxp-border-strong)}.nxp-ftc--locked{background:var(--nxp-bg-alt, #f8fafc)}.nxp-ftc--locked .nxp-ftc__title{color:var(--nxp-text-muted)}.nxp-ftc--disabled{opacity:.55;pointer-events:none}.nxp-ftc__body{display:flex;align-items:center;justify-content:space-between;gap:16px}.nxp-ftc__left{display:flex;flex-direction:column;gap:3px;min-width:0}.nxp-ftc__right{display:flex;align-items:center;gap:10px;flex-shrink:0}.nxp-ftc__title-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.nxp-ftc__title{font-size:13.5px;font-weight:500;color:var(--nxp-text);line-height:1.4;transition:color .15s}.nxp-ftc__badge{display:inline-flex;align-items:center;padding:2px 7px;border-radius:4px;font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;line-height:1.6;background:var(--nxp-bg-alt);color:var(--nxp-text-muted)}.nxp-ftc__badge--new{background:#ecfdf5;color:#059669;border:1px solid #a7f3d0}.nxp-ftc__badge--beta{background:var(--nxp-brand);color:#fff}.nxp-ftc__badge--pro{background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff}.nxp-ftc__badge--primary{background:var(--nxp-brand-soft);color:var(--nxp-brand)}.nxp-ftc__badge--success{background:#f0fdf4;color:#16a34a}.nxp-ftc__badge--warning{background:#fffbeb;color:#d97706}.nxp-ftc__badge--error{background:#fef2f2;color:#dc2626}.nxp-ftc__info-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--nxp-text-muted);cursor:pointer;border-radius:50%;padding:1px;transition:color .15s;outline:none;flex-shrink:0}.nxp-ftc__info-icon:hover,.nxp-ftc__info-icon:focus-visible{color:var(--nxp-brand)}.nxp-ftc__links{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.nxp-ftc__links-sep{color:var(--nxp-text-muted);font-size:11px;line-height:1;-webkit-user-select:none;user-select:none}.nxp-ftc__link{display:inline-flex;align-items:center;gap:3px;font-size:12px;font-weight:500;color:var(--nxp-brand);text-decoration:none;line-height:1.4;cursor:pointer}.nxp-ftc__link:hover{text-decoration:underline}.nxp-ftc__link--btn{border:none;background:none;padding:0;font-family:var(--nxp-font);cursor:pointer}.nxp-ftc__link--btn:disabled{cursor:not-allowed;opacity:.5}.nxp-ftc__upgrade-link{display:inline-flex;align-items:center;gap:3px;font-size:12px;font-weight:600;color:#7c3aed;text-decoration:none;cursor:pointer;line-height:1.4}.nxp-ftc__upgrade-link:hover{text-decoration:underline}.nxp-ftc__settings-btn,.nxp-ftc__lock-btn{width:32px;height:32px;border-radius:50%;border:1.5px solid var(--nxp-border-strong);background:var(--nxp-bg);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:var(--nxp-text-muted);transition:border-color var(--nxp-dur-hover) var(--nxp-ease),color var(--nxp-dur-hover) var(--nxp-ease),background var(--nxp-dur-hover) var(--nxp-ease);outline:none;padding:0;flex-shrink:0}.nxp-ftc__settings-btn:hover{border-color:var(--nxp-brand);color:var(--nxp-brand);background:var(--nxp-brand-soft)}.nxp-ftc__settings-btn:focus-visible{box-shadow:var(--nxp-ring);border-color:var(--nxp-brand)}.nxp-ftc__settings-btn:disabled{opacity:.45;cursor:not-allowed}.nxp-ftc__lock-btn{border-color:#ddd6fe;color:#7c3aed;background:#faf5ff}.nxp-ftc__lock-btn:hover{border-color:#7c3aed;background:#ede9fe;color:#6d28d9}.nxp-ftc__lock-btn:focus-visible{box-shadow:0 0 0 2px #7c3aed33;border-color:#7c3aed}.nxp-tg{display:grid;gap:8px}.nxp-tg--cols-1{grid-template-columns:1fr}.nxp-tg--cols-2{grid-template-columns:repeat(2,1fr)}.nxp-tg--cols-3{grid-template-columns:repeat(3,1fr)}.nxp-tg--cols-4{grid-template-columns:repeat(4,1fr)}@media (max-width: 640px){.nxp-tg--cols-3,.nxp-tg--cols-4{grid-template-columns:repeat(2,1fr)}}@media (max-width: 480px){.nxp-tg--cols-2,.nxp-tg--cols-3,.nxp-tg--cols-4{grid-template-columns:1fr}}.nxp-tg__item{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;background:var(--nxp-bg);border:1px solid var(--nxp-border);border-radius:var(--nxp-radius);box-shadow:var(--nxp-shadow-sm);min-width:0;transition:border-color .15s,box-shadow .15s}.nxp-tg__item:hover{border-color:var(--nxp-border-strong)}.nxp-tg__item-label-row{display:flex;align-items:center;gap:5px;min-width:0}.nxp-tg__item-label{font-family:var(--nxp-font);font-size:13px;font-weight:500;color:var(--nxp-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nxp-tg__item-info{display:inline-flex;align-items:center;justify-content:center;color:var(--nxp-text-faint);cursor:pointer;border-radius:50%;padding:1px;transition:color .15s;flex-shrink:0}.nxp-tg__item-info:hover,.nxp-tg__item-info:focus-visible{color:var(--nxp-text-muted);outline:none}.nxp-tg__item-info:focus-visible{box-shadow:0 0 0 2px var(--nxp-brand-soft)}.nxp-copy{display:flex;flex-direction:column;gap:5px;font-family:var(--nxp-font)}.nxp-copy--disabled{opacity:.55;pointer-events:none}.nxp-copy__label{font-size:13px;font-weight:500;color:var(--nxp-text)}.nxp-copy__wrap{display:flex;align-items:stretch;border:1.5px solid var(--nxp-border);border-radius:var(--nxp-radius);overflow:hidden;background:var(--nxp-bg);transition:border-color .15s,box-shadow .15s}.nxp-copy__wrap:focus-within{border-color:var(--nxp-brand);box-shadow:0 0 0 3px var(--nxp-brand-soft)}.nxp-copy__input{flex:1;min-width:0;padding:0 12px;height:36px;border:none;background:transparent;font-family:var(--nxp-font);font-size:13px;color:var(--nxp-text-muted);outline:none;cursor:default}.nxp-copy__btn{display:inline-flex;align-items:center;gap:5px;padding:0 14px;height:36px;border:none;border-left:1.5px solid var(--nxp-border);background:var(--nxp-bg-alt);font-family:var(--nxp-font);font-size:12.5px;font-weight:500;color:var(--nxp-text-muted);cursor:pointer;white-space:nowrap;transition:background .15s,color .15s;flex-shrink:0}.nxp-copy__btn:hover{background:var(--nxp-wash-hover);color:var(--nxp-text)}.nxp-copy__btn--copied{color:var(--nxp-success);background:#f0fdf4}.nxp-copy__hint{font-size:11.5px;color:var(--nxp-text-faint)}.nxp-bc{font-family:var(--nxp-font)}.nxp-bc__list{display:flex;flex-wrap:wrap;align-items:center;gap:2px;list-style:none;margin:0;padding:0}.nxp-bc__item{display:flex;align-items:center;gap:2px}.nxp-bc__link{display:inline-flex;align-items:center;gap:4px;font-size:13px;color:var(--nxp-brand);text-decoration:none;padding:2px 4px;border-radius:var(--nxp-radius-sm);transition:background .12s,color .12s}.nxp-bc__link--btn{background:transparent;border:none;cursor:pointer;font-family:var(--nxp-font)}.nxp-bc__link:hover{background:var(--nxp-brand-soft)}.nxp-bc__icon{display:inline-flex}.nxp-bc__sep{display:inline-flex;color:var(--nxp-text-faint);padding:0 2px}.nxp-bc__current{display:inline-flex;align-items:center;gap:4px;font-size:13px;font-weight:500;color:var(--nxp-text);padding:2px 4px}.nxp-confirm--inline{display:inline-flex;align-items:center;gap:6px;flex-wrap:wrap}.nxp-confirm__message{font-family:var(--nxp-font);font-size:12.5px;font-weight:500;color:var(--nxp-text-muted)}.nxp-confirm__ok{display:inline-flex;align-items:center;height:28px;padding:0 12px;border:none;border-radius:var(--nxp-radius-sm);font-family:var(--nxp-font);font-size:12px;font-weight:600;cursor:pointer;transition:opacity .15s}.nxp-confirm__ok--error{background:var(--nxp-error);color:#fff}.nxp-confirm__ok--warning{background:var(--nxp-warning);color:#fff}.nxp-confirm__ok--primary{background:var(--nxp-brand);color:#fff}.nxp-confirm__ok:hover{opacity:.88}.nxp-confirm__cancel{display:inline-flex;align-items:center;height:28px;padding:0 12px;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-sm);background:var(--nxp-bg);font-family:var(--nxp-font);font-size:12px;color:var(--nxp-text-muted);cursor:pointer;transition:border-color .15s,background .15s}.nxp-confirm__cancel:hover{border-color:var(--nxp-border-strong);background:var(--nxp-wash-hover)}.nxp-confirm--sm .nxp-confirm__ok,.nxp-confirm--sm .nxp-confirm__cancel{height:24px;padding:0 10px;font-size:11px}.nxp-num{display:flex;flex-direction:column;gap:5px;font-family:var(--nxp-font)}.nxp-num--disabled{opacity:.55;pointer-events:none}.nxp-num--error .nxp-num__wrap{border-color:var(--nxp-error)}.nxp-num__label{font-size:13px;font-weight:500;color:var(--nxp-text)}.nxp-num__wrap{display:inline-flex;align-items:stretch;border:1.5px solid var(--nxp-border);border-radius:var(--nxp-radius);overflow:hidden;background:var(--nxp-bg);width:fit-content;transition:border-color .15s,box-shadow .15s}.nxp-num__wrap:focus-within{border-color:var(--nxp-brand);box-shadow:0 0 0 3px var(--nxp-brand-soft)}.nxp-num__step{display:inline-flex;align-items:center;justify-content:center;width:32px;height:36px;border:none;background:var(--nxp-bg-alt);color:var(--nxp-text-muted);cursor:pointer;transition:background .12s,color .12s;flex-shrink:0}.nxp-num__step:hover:not(:disabled){background:var(--nxp-wash-hover);color:var(--nxp-text)}.nxp-num__step:disabled{opacity:.4;cursor:not-allowed}.nxp-num__step--dec{border-right:1.5px solid var(--nxp-border)}.nxp-num__step--inc{border-left:1.5px solid var(--nxp-border)}.nxp-num__field{display:flex;align-items:center}.nxp-num__input{width:72px;height:36px;border:none;background:transparent;font-family:var(--nxp-font);font-size:14px;font-weight:500;color:var(--nxp-text);text-align:center;outline:none;-moz-appearance:textfield}.nxp-num__input::-webkit-outer-spin-button,.nxp-num__input::-webkit-inner-spin-button{-webkit-appearance:none}.nxp-num__prefix,.nxp-num__suffix{padding:0 6px;font-size:12px;color:var(--nxp-text-muted)}.nxp-num__hint{font-size:11.5px;color:var(--nxp-text-faint)}.nxp-num__error{font-size:11.5px;color:var(--nxp-error)}.nxp-otp{display:inline-flex;align-items:center;gap:6px;font-family:var(--nxp-font)}.nxp-otp--disabled{opacity:.55;pointer-events:none}.nxp-otp__input{width:40px;height:44px;border:1.5px solid var(--nxp-border);border-radius:var(--nxp-radius);background:var(--nxp-bg);font-family:var(--nxp-font);font-size:18px;font-weight:600;color:var(--nxp-text);text-align:center;outline:none;transition:border-color .15s,box-shadow .15s;caret-color:var(--nxp-brand)}.nxp-otp__input:focus{border-color:var(--nxp-brand);box-shadow:0 0 0 3px var(--nxp-brand-soft)}.nxp-otp__sep{font-size:18px;color:var(--nxp-text-faint);margin:0 2px}.nxp-sortable{display:flex;flex-direction:column;gap:4px;font-family:var(--nxp-font)}.nxp-sortable--disabled .nxp-sortable__handle{display:none}.nxp-sortable__item{display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--nxp-bg);border:1px solid var(--nxp-border);border-radius:var(--nxp-radius);cursor:default;transition:box-shadow .15s,background .12s,border-color .12s;-webkit-user-select:none;user-select:none}.nxp-sortable__item[draggable=true]{cursor:grab}.nxp-sortable__item--dragging{opacity:.45;border-style:dashed}.nxp-sortable__item--over-top{border-top:2px solid var(--nxp-brand)}.nxp-sortable__item--over-bottom{border-bottom:2px solid var(--nxp-brand)}.nxp-sortable__handle{display:inline-flex;color:var(--nxp-text-faint);cursor:grab;flex-shrink:0;padding:2px;border-radius:3px;transition:color .12s}.nxp-sortable__handle:hover{color:var(--nxp-text-muted)}.nxp-sortable__content{flex:1;min-width:0}.nxp-sortable__label{font-size:13.5px;color:var(--nxp-text)}.nxp-upload{display:flex;flex-direction:column;gap:10px;font-family:var(--nxp-font)}.nxp-upload__zone{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:28px 20px;border:2px dashed var(--nxp-border);border-radius:var(--nxp-radius-lg);background:var(--nxp-bg-alt);text-align:center;cursor:pointer;transition:border-color .15s,background .15s}.nxp-upload__zone:hover,.nxp-upload__zone--over{border-color:var(--nxp-brand);background:var(--nxp-brand-soft)}.nxp-upload__zone--disabled{opacity:.55;pointer-events:none}.nxp-upload__zone svg{color:var(--nxp-text-faint)}.nxp-upload__drop-text{font-size:13.5px;color:var(--nxp-text-muted)}.nxp-upload__actions{display:flex;gap:8px}.nxp-upload__browse{display:inline-flex;align-items:center;gap:5px;height:30px;padding:0 14px;border:1.5px solid var(--nxp-brand);border-radius:var(--nxp-radius-pill);background:transparent;font-family:var(--nxp-font);font-size:12.5px;font-weight:600;color:var(--nxp-brand);cursor:pointer;transition:background .15s,color .15s}.nxp-upload__browse:hover{background:var(--nxp-brand);color:#fff}.nxp-upload__browse--wp{border-color:#3c434a;color:#3c434a}.nxp-upload__browse--wp:hover{background:#3c434a;color:#fff}.nxp-upload__hint{font-size:11px;color:var(--nxp-text-faint)}.nxp-upload__error{font-size:12px;color:var(--nxp-error);margin:0}.nxp-upload__preview{display:flex;flex-direction:column;gap:6px}.nxp-upload__item{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius);background:var(--nxp-bg)}.nxp-upload__item-thumb{width:36px;height:36px;border-radius:var(--nxp-radius-sm);overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:var(--nxp-bg-alt);color:var(--nxp-text-faint)}.nxp-upload__item-img{width:100%;height:100%;object-fit:cover}.nxp-upload__item-info{flex:1;min-width:0}.nxp-upload__item-name{display:block;font-size:12.5px;font-weight:500;color:var(--nxp-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nxp-upload__item-size{font-size:11px;color:var(--nxp-text-faint)}.nxp-upload__item-remove{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border:1px solid var(--nxp-border);border-radius:50%;background:transparent;color:var(--nxp-text-muted);cursor:pointer;transition:border-color .12s,color .12s,background .12s;flex-shrink:0}.nxp-upload__item-remove:hover{border-color:var(--nxp-error);color:var(--nxp-error);background:#fef2f2}.nxp-cpicker{position:relative;display:inline-block;font-family:var(--nxp-font)}.nxp-cpicker--disabled{opacity:.55;pointer-events:none}.nxp-cpicker__trigger{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 10px;border:1.5px solid var(--nxp-border);border-radius:var(--nxp-radius);background:var(--nxp-bg);cursor:pointer;font-family:var(--nxp-font);font-size:13px;font-weight:500;color:var(--nxp-text);transition:border-color .15s,box-shadow .15s}.nxp-cpicker__trigger:hover{border-color:var(--nxp-brand)}.nxp-cpicker__trigger:focus-visible{border-color:var(--nxp-brand);box-shadow:0 0 0 3px var(--nxp-brand-soft);outline:none}.nxp-cpicker__trigger-swatch{width:18px;height:18px;border-radius:3px;background:var(--swatch, #1E40AF);border:1px solid rgba(0,0,0,.12);flex-shrink:0}.nxp-cpicker__trigger-hex{font-size:12.5px;letter-spacing:.04em}.nxp-cpicker__trigger-caret{font-size:9px;color:var(--nxp-text-faint)}.nxp-cpicker__panel{position:absolute;top:calc(100% + 6px);left:0;z-index:300;width:240px;background:var(--nxp-bg);border:1.5px solid var(--nxp-border);border-radius:var(--nxp-radius-lg);box-shadow:var(--nxp-shadow-md);padding:12px;display:flex;flex-direction:column;gap:10px;animation:nxp-ms-in .12s var(--nxp-ease)}.nxp-cpicker__gradient{position:relative;width:100%;height:160px;border-radius:var(--nxp-radius-sm);cursor:crosshair;overflow:hidden}.nxp-cpicker__gradient-white{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to right,white,transparent)}.nxp-cpicker__gradient-black{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(to bottom,transparent,black)}.nxp-cpicker__thumb{position:absolute;width:14px;height:14px;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 4px #0006;transform:translate(-50%,-50%);pointer-events:none}.nxp-cpicker__sliders{display:flex;flex-direction:column;gap:8px}.nxp-cpicker__hue{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:12px;border-radius:var(--nxp-radius-pill);background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);outline:none;cursor:pointer}.nxp-cpicker__hue::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid rgba(0,0,0,.2);box-shadow:0 1px 3px #0000004d;cursor:grab}.nxp-cpicker__alpha{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:12px;border-radius:var(--nxp-radius-pill);background:linear-gradient(to right,var(--alpha-start),var(--alpha-end)),repeating-conic-gradient(#ccc,#ccc 25%,#fff 0%,#fff 50%) 0 0 / 8px 8px;outline:none;cursor:pointer}.nxp-cpicker__alpha::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid rgba(0,0,0,.2);box-shadow:0 1px 3px #0000004d;cursor:grab}.nxp-cpicker__hex-row{display:flex;align-items:center;gap:8px}.nxp-cpicker__preview{width:28px;height:28px;border-radius:var(--nxp-radius-sm);border:1px solid rgba(0,0,0,.1);flex-shrink:0}.nxp-cpicker__hex-wrap{display:flex;align-items:center;flex:1;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-sm);overflow:hidden}.nxp-cpicker__hex-hash{padding:0 6px;font-size:12.5px;color:var(--nxp-text-faint)}.nxp-cpicker__hex-input{flex:1;border:none;height:30px;font-family:var(--nxp-font);font-size:12.5px;letter-spacing:.06em;color:var(--nxp-text);background:transparent;outline:none;width:80px}.nxp-cpicker__alpha-val{font-size:12px;color:var(--nxp-text-muted);min-width:32px;text-align:right}.nxp-cpicker__swatches{display:flex;flex-wrap:wrap;gap:5px;padding-top:4px;border-top:1px solid var(--nxp-border)}.nxp-cpicker__swatch{width:20px;height:20px;border-radius:3px;border:1.5px solid transparent;cursor:pointer;transition:transform .1s,border-color .1s}.nxp-cpicker__swatch:hover{transform:scale(1.15)}.nxp-cpicker__swatch--active{border-color:var(--nxp-brand);transform:scale(1.15)}.nxp-date,.nxp-drp{position:relative;display:inline-block;font-family:var(--nxp-font)}.nxp-date--disabled,.nxp-drp--disabled{opacity:.55;pointer-events:none}.nxp-date__trigger,.nxp-drp__trigger{display:inline-flex;align-items:center;gap:8px;min-height:36px;padding:0 10px;border:1.5px solid var(--nxp-border);border-radius:var(--nxp-radius);background:var(--nxp-bg);cursor:pointer;font-size:13px;color:var(--nxp-text);transition:border-color .15s,box-shadow .15s;-webkit-user-select:none;user-select:none}.nxp-date__trigger:hover,.nxp-drp__trigger:hover,.nxp-date--open .nxp-date__trigger,.nxp-drp--open .nxp-drp__trigger{border-color:var(--nxp-brand)}.nxp-date__icon{display:inline-flex;color:var(--nxp-text-faint)}.nxp-date__value{font-size:13px}.nxp-date__value--placeholder{color:var(--nxp-text-faint)}.nxp-date__clear{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border:none;background:transparent;color:var(--nxp-text-faint);cursor:pointer;border-radius:50%;transition:color .12s,background .12s;margin-left:2px}.nxp-date__clear:hover{color:var(--nxp-text);background:var(--nxp-border)}.nxp-date__popover{position:absolute;top:calc(100% + 6px);left:0;z-index:300;background:var(--nxp-bg);border:1.5px solid var(--nxp-border);border-radius:var(--nxp-radius-lg);box-shadow:var(--nxp-shadow-md);padding:12px;min-width:268px;animation:nxp-ms-in .12s var(--nxp-ease)}.nxp-date__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.nxp-date__nav{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-sm);background:var(--nxp-bg);color:var(--nxp-text-muted);cursor:pointer;transition:background .12s,border-color .12s}.nxp-date__nav:hover{background:var(--nxp-wash-hover);border-color:var(--nxp-border-strong)}.nxp-date__month-label{font-size:14px;font-weight:600;color:var(--nxp-text)}.nxp-date__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}.nxp-date__grid--head{margin-bottom:4px}.nxp-date__dow{display:flex;align-items:center;justify-content:center;height:28px;font-size:11px;font-weight:600;color:var(--nxp-text-muted);letter-spacing:.04em}.nxp-date__day{display:flex;align-items:center;justify-content:center;height:32px;border:none;border-radius:var(--nxp-radius-sm);background:transparent;font-family:var(--nxp-font);font-size:13px;color:var(--nxp-text);cursor:pointer;transition:background .1s,color .1s}.nxp-date__day:hover:not(:disabled):not(.nxp-date__day--selected){background:var(--nxp-wash-hover)}.nxp-date__day--outside{color:var(--nxp-text-faint)}.nxp-date__day--today{font-weight:700;color:var(--nxp-brand)}.nxp-date__day--selected{background:var(--nxp-brand);color:#fff;font-weight:600}.nxp-date__day--disabled{opacity:.35;cursor:not-allowed}.nxp-date__day--in-range{background:var(--nxp-brand-soft);border-radius:0;color:var(--nxp-brand)}.nxp-date__day--range-start{border-radius:var(--nxp-radius-sm) 0 0 var(--nxp-radius-sm)}.nxp-date__day--range-end{border-radius:0 var(--nxp-radius-sm) var(--nxp-radius-sm) 0}.nxp-date__footer{display:flex;justify-content:flex-end;padding-top:8px;border-top:1px solid var(--nxp-border);margin-top:6px}.nxp-date__today-btn{height:28px;padding:0 12px;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-sm);background:var(--nxp-bg);font-family:var(--nxp-font);font-size:12px;font-weight:500;color:var(--nxp-brand);cursor:pointer;transition:background .12s}.nxp-date__today-btn:hover{background:var(--nxp-brand-soft)}.nxp-drp__trigger{gap:6px}.nxp-drp__segment{font-size:13px}.nxp-drp__arrow{display:inline-flex;color:var(--nxp-text-faint)}.nxp-drp__popover{position:absolute;top:calc(100% + 6px);left:0;z-index:300;background:var(--nxp-bg);border:1.5px solid var(--nxp-border);border-radius:var(--nxp-radius-lg);box-shadow:var(--nxp-shadow-md);padding:14px;animation:nxp-ms-in .12s var(--nxp-ease)}.nxp-drp__calendars{display:flex;gap:16px}.nxp-drp__cal{min-width:240px}.nxp-drp__cal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}@media (max-width: 560px){.nxp-drp__calendars{flex-direction:column}}.nxp-ms{position:relative;font-family:var(--nxp-font);width:100%;outline:none}.nxp-ms--disabled{opacity:.55;pointer-events:none}.nxp-ms__trigger{display:flex;align-items:center;gap:6px;min-height:38px;padding:4px 8px 4px 10px;border:1.5px solid var(--nxp-border);border-radius:var(--nxp-radius);background:var(--nxp-bg);cursor:pointer;transition:border-color .15s,box-shadow .15s;-webkit-user-select:none;user-select:none}.nxp-ms--open .nxp-ms__trigger,.nxp-ms__trigger:hover{border-color:var(--nxp-brand)}.nxp-ms:focus-visible .nxp-ms__trigger{border-color:var(--nxp-brand);box-shadow:0 0 0 3px var(--nxp-brand-soft)}.nxp-ms__tags-wrap{display:flex;flex-wrap:wrap;align-items:center;gap:4px;flex:1;min-width:0}.nxp-ms__placeholder{font-size:13px;color:var(--nxp-text-faint)}.nxp-ms__tag{display:inline-flex;align-items:center;gap:3px;padding:2px 6px 2px 8px;background:var(--nxp-bg-alt);border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-pill);font-size:12px;font-weight:500;color:var(--nxp-text);max-width:160px;white-space:nowrap}.nxp-ms__tag-label{overflow:hidden;text-overflow:ellipsis}.nxp-ms__tag-remove{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;border:none;background:transparent;color:var(--nxp-text-muted);font-size:14px;line-height:1;cursor:pointer;padding:0;border-radius:50%;transition:background .12s,color .12s}.nxp-ms__tag-remove:hover{background:var(--nxp-border-strong);color:var(--nxp-text)}.nxp-ms__trigger-end{display:flex;align-items:center;gap:4px;flex-shrink:0;margin-left:auto}.nxp-ms__clear{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border:none;background:transparent;color:var(--nxp-text-muted);font-size:16px;line-height:1;cursor:pointer;padding:0;border-radius:50%;transition:background .12s,color .12s}.nxp-ms__clear:hover{background:var(--nxp-border);color:var(--nxp-text)}.nxp-ms__chevron{display:inline-flex;align-items:center;color:var(--nxp-text-muted);transition:transform .18s var(--nxp-ease)}.nxp-ms__chevron--up{transform:rotate(180deg)}.nxp-ms__dropdown{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:200;background:var(--nxp-bg);border:1.5px solid var(--nxp-border);border-radius:var(--nxp-radius);box-shadow:var(--nxp-shadow-md);overflow:hidden;animation:nxp-ms-in .12s var(--nxp-ease)}@keyframes nxp-ms-in{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.nxp-ms__search-wrap{padding:8px 10px;border-bottom:1px solid var(--nxp-border)}.nxp-ms__search{width:100%;height:30px;padding:0 10px;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-sm);background:var(--nxp-bg-alt);font-family:var(--nxp-font);font-size:12.5px;color:var(--nxp-text);outline:none;transition:border-color .15s,box-shadow .15s;box-sizing:border-box}.nxp-ms__search::placeholder{color:var(--nxp-text-faint)}.nxp-ms__search:focus{border-color:var(--nxp-brand);box-shadow:0 0 0 2px var(--nxp-brand-soft)}.nxp-ms__list{max-height:240px;overflow-y:auto;padding:4px 0;scrollbar-width:thin;scrollbar-color:var(--nxp-border) transparent}.nxp-ms__list::-webkit-scrollbar{width:5px}.nxp-ms__list::-webkit-scrollbar-thumb{background:var(--nxp-border-strong);border-radius:99px}.nxp-ms__group{padding:0}.nxp-ms__group+.nxp-ms__group{border-top:1px solid var(--nxp-border);margin-top:4px;padding-top:4px}.nxp-ms__group-label{padding:5px 14px 3px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--nxp-text-muted)}.nxp-ms__option{display:flex;align-items:center;justify-content:space-between;padding:7px 14px;font-size:13px;color:var(--nxp-text);cursor:pointer;transition:background .1s,color .1s;gap:8px}.nxp-ms__option--focused{background:var(--nxp-wash-hover)}.nxp-ms__option--selected{background:var(--nxp-brand);color:#fff}.nxp-ms__option--selected.nxp-ms__option--focused{background:#1a389e}.nxp-ms__option--disabled{opacity:.45;cursor:not-allowed}.nxp-ms__option-label{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nxp-ms__option-check{flex-shrink:0;display:inline-flex;color:#fff;opacity:.9}.nxp-ms__empty{padding:16px 14px;font-size:13px;color:var(--nxp-text-muted);text-align:center}.nxp-drawer__backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;background:#0f172a73;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);animation:nxp-drawer-fade-in .2s var(--nxp-ease) both}@keyframes nxp-drawer-fade-in{0%{opacity:0}to{opacity:1}}.nxp-drawer__panel{position:fixed;z-index:1001;display:flex;flex-direction:column;background:var(--nxp-bg);box-shadow:var(--nxp-shadow-lg);overflow:hidden}.nxp-drawer__panel--right{top:0;right:0;bottom:0;animation:nxp-drawer-slide-right .26s var(--nxp-ease) both}.nxp-drawer__panel--left{top:0;left:0;bottom:0;animation:nxp-drawer-slide-left .26s var(--nxp-ease) both}.nxp-drawer__panel--top{top:0;left:0;right:0;animation:nxp-drawer-slide-top .26s var(--nxp-ease) both}.nxp-drawer__panel--bottom{bottom:0;left:0;right:0;animation:nxp-drawer-slide-bottom .26s var(--nxp-ease) both}@keyframes nxp-drawer-slide-right{0%{transform:translate(100%)}to{transform:translate(0)}}@keyframes nxp-drawer-slide-left{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes nxp-drawer-slide-top{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes nxp-drawer-slide-bottom{0%{transform:translateY(100%)}to{transform:translateY(0)}}.nxp-drawer__panel--left.nxp-drawer__panel--sm,.nxp-drawer__panel--right.nxp-drawer__panel--sm{width:280px}.nxp-drawer__panel--left.nxp-drawer__panel--md,.nxp-drawer__panel--right.nxp-drawer__panel--md{width:400px}.nxp-drawer__panel--left.nxp-drawer__panel--lg,.nxp-drawer__panel--right.nxp-drawer__panel--lg{width:560px}.nxp-drawer__panel--left.nxp-drawer__panel--xl,.nxp-drawer__panel--right.nxp-drawer__panel--xl{width:720px}.nxp-drawer__panel--left.nxp-drawer__panel--full,.nxp-drawer__panel--right.nxp-drawer__panel--full{width:100vw}.nxp-drawer__panel--top.nxp-drawer__panel--sm,.nxp-drawer__panel--bottom.nxp-drawer__panel--sm{height:200px}.nxp-drawer__panel--top.nxp-drawer__panel--md,.nxp-drawer__panel--bottom.nxp-drawer__panel--md{height:320px}.nxp-drawer__panel--top.nxp-drawer__panel--lg,.nxp-drawer__panel--bottom.nxp-drawer__panel--lg{height:480px}.nxp-drawer__panel--top.nxp-drawer__panel--xl,.nxp-drawer__panel--bottom.nxp-drawer__panel--xl{height:640px}.nxp-drawer__panel--top.nxp-drawer__panel--full,.nxp-drawer__panel--bottom.nxp-drawer__panel--full{height:100vh}.nxp-drawer__head{display:flex;align-items:flex-start;gap:12px;padding:18px 20px 16px;border-bottom:1px solid var(--nxp-border);flex-shrink:0}.nxp-drawer__head-text{flex:1;min-width:0}.nxp-drawer__title{font-size:15px;font-weight:600;color:var(--nxp-text-strong);font-family:var(--nxp-font);line-height:1.3}.nxp-drawer__byline{margin-top:3px;font-size:13px;color:var(--nxp-text-muted);font-family:var(--nxp-font);line-height:1.4}.nxp-drawer__close{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-sm);background:transparent;color:var(--nxp-text-muted);cursor:pointer;flex-shrink:0;transition:background var(--nxp-dur-hover),color var(--nxp-dur-hover),border-color var(--nxp-dur-hover)}.nxp-drawer__close:hover{background:var(--nxp-wash-hover);color:var(--nxp-text);border-color:var(--nxp-border-strong)}.nxp-drawer__body{flex:1;overflow-y:auto;padding:20px;font-family:var(--nxp-font);font-size:14px;color:var(--nxp-text)}.nxp-drawer__foot{padding:14px 20px;border-top:1px solid var(--nxp-border);flex-shrink:0;display:flex;align-items:center;gap:8px;background:var(--nxp-bg-alt)}@media (max-width: 480px){.nxp-drawer__panel--right,.nxp-drawer__panel--left{width:100vw!important}.nxp-drawer__panel--top,.nxp-drawer__panel--bottom{height:70vh!important}}.nxp-sb{position:relative;display:flex;flex-direction:column;height:100%;background:var(--nxp-bg);border-right:1px solid var(--nxp-border);overflow:hidden;transition:width .22s var(--nxp-ease);font-family:var(--nxp-font)}.nxp-sb__header{padding:16px 12px 12px;flex-shrink:0;border-bottom:1px solid var(--nxp-border)}.nxp-sb__nav{flex:1;overflow-y:auto;overflow-x:hidden;padding:8px 0}.nxp-sb__list,.nxp-sb__sub{list-style:none;margin:0;padding:0}.nxp-sb__divider{margin:6px 12px;border-top:1px solid var(--nxp-border);padding-top:8px}.nxp-sb__section-label{display:block;font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--nxp-text-faint);padding:0 4px 4px}.nxp-sb__item{display:flex;align-items:center;gap:9px;margin:1px 8px;padding:0 10px;height:36px;border-radius:var(--nxp-radius);text-decoration:none;color:var(--nxp-text-muted);font-size:13.5px;font-weight:500;white-space:nowrap;overflow:hidden;transition:background var(--nxp-dur-hover),color var(--nxp-dur-hover);cursor:pointer;-webkit-user-select:none;user-select:none}.nxp-sb__item:hover{background:var(--nxp-wash-hover);color:var(--nxp-text)}.nxp-sb__item--active{background:var(--nxp-brand-soft);color:var(--nxp-brand);font-weight:600}.nxp-sb__item--active:hover{background:var(--nxp-brand-soft);color:var(--nxp-brand)}.nxp-sb__item--active-parent{color:var(--nxp-text)}.nxp-sb__item--disabled{opacity:.45;pointer-events:none;cursor:not-allowed}.nxp-sb__item--child{margin-left:24px;height:32px;font-size:13px;font-weight:400}.nxp-sb__icon{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;flex-shrink:0;color:inherit}.nxp-sb__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis}.nxp-sb__badge{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 5px;border-radius:var(--nxp-radius-pill);font-size:10px;font-weight:700;line-height:1;background:var(--nxp-brand-soft);color:var(--nxp-brand)}.nxp-sb__badge--success{background:#dcfce7;color:var(--nxp-success)}.nxp-sb__badge--warning{background:#fef3c7;color:var(--nxp-warning)}.nxp-sb__badge--error{background:#fee2e2;color:var(--nxp-error)}.nxp-sb__badge--muted{background:var(--nxp-border);color:var(--nxp-text-muted)}.nxp-sb__chevron{display:inline-flex;align-items:center;margin-left:auto;color:var(--nxp-text-faint);transition:transform .2s var(--nxp-ease)}.nxp-sb__chevron--open{transform:rotate(180deg)}.nxp-sb__sub{padding-bottom:2px}.nxp-sb__footer{padding:12px;border-top:1px solid var(--nxp-border);flex-shrink:0}.nxp-sb__toggle{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:1px solid var(--nxp-border);border-radius:var(--nxp-radius-sm);background:var(--nxp-bg);color:var(--nxp-text-muted);cursor:pointer;position:absolute;bottom:14px;right:10px;flex-shrink:0;transition:background var(--nxp-dur-hover),color var(--nxp-dur-hover),border-color var(--nxp-dur-hover)}.nxp-sb__toggle:hover{background:var(--nxp-wash-hover);color:var(--nxp-text);border-color:var(--nxp-border-strong)}.nxp-sb--collapsed .nxp-sb__item{justify-content:center;padding:0;margin:1px 8px}.nxp-sb--collapsed .nxp-sb__icon{width:20px;height:20px}.nxp-sb--collapsed .nxp-sb__toggle{right:50%;transform:translate(50%)}.nxp-sb--collapsed .nxp-sb__nav{padding-bottom:44px}.nxp-sb--collapsed .nxp-sb__section-label{display:none}.nxp-sb--collapsed .nxp-sb__divider{margin:6px 12px}@media (prefers-reduced-motion: reduce){*,*:before,*:after{animation-duration:.01ms!important;transition-duration:.01ms!important}}.nxp-dark,[data-theme=dark],:root:not(.nxp-light){--_nxp-dark: 1}.nxp-dark,[data-theme=dark]{--nxp-bg: #0F172A;--nxp-bg-alt: #1E293B;--nxp-wash-hover: rgba(255, 255, 255, .05);--nxp-wash-active: rgba(99, 130, 224, .15);--nxp-text: #E2E8F0;--nxp-text-strong: #F8FAFC;--nxp-text-muted: #94A3B8;--nxp-text-faint: #475569;--nxp-border: #1E293B;--nxp-border-strong: #334155;--nxp-brand: #3B82F6;--nxp-brand-2: #818CF8;--nxp-brand-soft: rgba(59, 130, 246, .15);--nxp-brand-grad: linear-gradient(180deg, #3B82F6 0%, #818CF8 100%);--nxp-success: #22C55E;--nxp-warning: #F59E0B;--nxp-error: #F87171;--nxp-info: #60A5FA;--nxp-shadow-sm: 0 1px 2px rgba(0, 0, 0, .35);--nxp-shadow: 0 1px 3px rgba(0, 0, 0, .4), 0 0 0 1px rgba(255, 255, 255, .06);--nxp-shadow-md: 0 4px 16px -4px rgba(0, 0, 0, .5);--nxp-shadow-lg: 0 12px 40px rgba(0, 0, 0, .5), 0 4px 12px rgba(0, 0, 0, .3);--nxp-ring: 0 0 0 2px rgba(59, 130, 246, .4)}@media (prefers-color-scheme: dark){:root:not(.nxp-light){--nxp-bg: #0F172A;--nxp-bg-alt: #1E293B;--nxp-wash-hover: rgba(255, 255, 255, .05);--nxp-wash-active: rgba(99, 130, 224, .15);--nxp-text: #E2E8F0;--nxp-text-strong: #F8FAFC;--nxp-text-muted: #94A3B8;--nxp-text-faint: #475569;--nxp-border: #1E293B;--nxp-border-strong: #334155;--nxp-brand: #3B82F6;--nxp-brand-2: #818CF8;--nxp-brand-soft: rgba(59, 130, 246, .15);--nxp-brand-grad: linear-gradient(180deg, #3B82F6 0%, #818CF8 100%);--nxp-success: #22C55E;--nxp-warning: #F59E0B;--nxp-error: #F87171;--nxp-info: #60A5FA;--nxp-shadow-sm: 0 1px 2px rgba(0, 0, 0, .35);--nxp-shadow: 0 1px 3px rgba(0, 0, 0, .4), 0 0 0 1px rgba(255, 255, 255, .06);--nxp-shadow-md: 0 4px 16px -4px rgba(0, 0, 0, .5);--nxp-shadow-lg: 0 12px 40px rgba(0, 0, 0, .5), 0 4px 12px rgba(0, 0, 0, .3);--nxp-ring: 0 0 0 2px rgba(59, 130, 246, .4)}}.nxp-dark .nxp-input,.nxp-dark .nxp-select,.nxp-dark .nxp-textarea,.nxp-dark .nxp-combobox__input,.nxp-dark .nxp-ms__search,.nxp-dark .nxp-num__input,.nxp-dark .nxp-slider__input,.nxp-dark .nxp-cpicker__hex-input,[data-theme=dark] .nxp-input,[data-theme=dark] .nxp-select,[data-theme=dark] .nxp-textarea,[data-theme=dark] .nxp-combobox__input,[data-theme=dark] .nxp-ms__search,[data-theme=dark] .nxp-num__input,[data-theme=dark] .nxp-slider__input,[data-theme=dark] .nxp-cpicker__hex-input{background:var(--nxp-bg-alt);color:var(--nxp-text);border-color:var(--nxp-border-strong)}.nxp-dark .nxp-dropdown__menu,.nxp-dark .nxp-combobox__list,.nxp-dark .nxp-ms__dropdown,.nxp-dark .nxp-date__popover,.nxp-dark .nxp-cpicker__panel,[data-theme=dark] .nxp-dropdown__menu,[data-theme=dark] .nxp-combobox__list,[data-theme=dark] .nxp-ms__dropdown,[data-theme=dark] .nxp-date__popover,[data-theme=dark] .nxp-cpicker__panel{background:var(--nxp-bg-alt);border-color:var(--nxp-border-strong);box-shadow:var(--nxp-shadow-lg)}.nxp-dark .nxp-sheet,[data-theme=dark] .nxp-sheet{background:var(--nxp-bg-alt);border-color:var(--nxp-border)}.nxp-dark .nxp-modal,.nxp-dark .nxp-drawer__panel,[data-theme=dark] .nxp-modal,[data-theme=dark] .nxp-drawer__panel{background:var(--nxp-bg-alt);border-color:var(--nxp-border-strong)}.nxp-dark .nxp-modal-backdrop,.nxp-dark .nxp-drawer__backdrop,[data-theme=dark] .nxp-modal-backdrop,[data-theme=dark] .nxp-drawer__backdrop{background:#000000a6}.nxp-dark .nxp-sb,[data-theme=dark] .nxp-sb{background:var(--nxp-bg-alt);border-right-color:var(--nxp-border)}.nxp-dark .nxp-toast,[data-theme=dark] .nxp-toast{background:#1e293b;border-color:var(--nxp-border-strong);color:var(--nxp-text)}.nxp-dark .nxp-tooltip,[data-theme=dark] .nxp-tooltip{background:#334155;color:var(--nxp-text-strong)}.nxp-dark .nxp-table,[data-theme=dark] .nxp-table{border-color:var(--nxp-border)}.nxp-dark .nxp-table th,.nxp-dark .nxp-table td,[data-theme=dark] .nxp-table th,[data-theme=dark] .nxp-table td{border-color:var(--nxp-border);color:var(--nxp-text)}.nxp-dark .nxp-table thead th,[data-theme=dark] .nxp-table thead th{background:var(--nxp-bg-alt)}.nxp-dark .nxp-table--striped tbody tr:nth-child(odd),[data-theme=dark] .nxp-table--striped tbody tr:nth-child(odd){background:#ffffff08}.nxp-dark .nxp-accordion__item,[data-theme=dark] .nxp-accordion__item{border-color:var(--nxp-border)}.nxp-dark .nxp-stepper__btn,.nxp-dark .nxp-num__step,[data-theme=dark] .nxp-stepper__btn,[data-theme=dark] .nxp-num__step{background:var(--nxp-bg-alt);border-color:var(--nxp-border-strong);color:var(--nxp-text-muted)}@media (prefers-color-scheme: dark){:root:not(.nxp-light) .nxp-input,:root:not(.nxp-light) .nxp-select,:root:not(.nxp-light) .nxp-textarea,:root:not(.nxp-light) .nxp-combobox__input,:root:not(.nxp-light) .nxp-ms__search,:root:not(.nxp-light) .nxp-num__input,:root:not(.nxp-light) .nxp-slider__input,:root:not(.nxp-light) .nxp-cpicker__hex-input{background:var(--nxp-bg-alt);color:var(--nxp-text);border-color:var(--nxp-border-strong)}:root:not(.nxp-light) .nxp-dropdown__menu,:root:not(.nxp-light) .nxp-combobox__list,:root:not(.nxp-light) .nxp-ms__dropdown,:root:not(.nxp-light) .nxp-date__popover,:root:not(.nxp-light) .nxp-cpicker__panel{background:var(--nxp-bg-alt);border-color:var(--nxp-border-strong);box-shadow:var(--nxp-shadow-lg)}:root:not(.nxp-light) .nxp-sheet{background:var(--nxp-bg-alt);border-color:var(--nxp-border)}:root:not(.nxp-light) .nxp-modal,:root:not(.nxp-light) .nxp-drawer__panel{background:var(--nxp-bg-alt);border-color:var(--nxp-border-strong)}:root:not(.nxp-light) .nxp-modal-backdrop,:root:not(.nxp-light) .nxp-drawer__backdrop{background:#000000a6}:root:not(.nxp-light) .nxp-sb{background:var(--nxp-bg-alt);border-right-color:var(--nxp-border)}:root:not(.nxp-light) .nxp-toast{background:#1e293b;border-color:var(--nxp-border-strong);color:var(--nxp-text)}:root:not(.nxp-light) .nxp-tooltip{background:#334155;color:var(--nxp-text-strong)}:root:not(.nxp-light) .nxp-table{border-color:var(--nxp-border)}:root:not(.nxp-light) .nxp-table th,:root:not(.nxp-light) .nxp-table td{border-color:var(--nxp-border);color:var(--nxp-text)}:root:not(.nxp-light) .nxp-table thead th{background:var(--nxp-bg-alt)}:root:not(.nxp-light) .nxp-table--striped tbody tr:nth-child(odd){background:#ffffff08}:root:not(.nxp-light) .nxp-accordion__item{border-color:var(--nxp-border)}:root:not(.nxp-light) .nxp-stepper__btn,:root:not(.nxp-light) .nxp-num__step{background:var(--nxp-bg-alt);border-color:var(--nxp-border-strong);color:var(--nxp-text-muted)}}`)),document.head.appendChild(n)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { jsx as n, jsxs as c, Fragment as be } from "react/jsx-runtime";
import Ne, { useState as C, useCallback as A, useRef as H, useEffect as P, useId as ke, memo as De, useMemo as q } from "react";
import { createPortal as ce } from "react-dom";
function kn({ items: e = [], defaultOpen: t = [], multi: r = !1, className: a = "" }) {
  const [i, s] = C(new Set(t)), l = A(
    (o) => {
      s((u) => {
        const d = new Set(u);
        return d.has(o) ? d.delete(o) : (r || d.clear(), d.add(o)), d;
      });
    },
    [r]
  );
  return /* @__PURE__ */ n("div", { className: `nxp-accordion ${a}`, children: e.map((o) => {
    const u = i.has(o.id);
    return /* @__PURE__ */ c(
      "div",
      {
        className: `nxp-accordion__item${u ? " is-open" : ""}`,
        children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              className: "nxp-accordion__head",
              onClick: () => l(o.id),
              "aria-expanded": u,
              "aria-controls": `accordion-body-${o.id}`,
              children: [
                /* @__PURE__ */ n("span", { children: o.title }),
                /* @__PURE__ */ n("svg", { className: "nxp-accordion__chevron", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ n("path", { d: "M4 6l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
              ]
            }
          ),
          /* @__PURE__ */ n(
            "div",
            {
              id: `accordion-body-${o.id}`,
              className: "nxp-accordion__body",
              role: "region",
              children: o.content
            }
          )
        ]
      },
      o.id
    );
  }) });
}
const $e = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "×"
};
function gn({ variant: e = "info", icon: t, children: r, className: a = "" }) {
  const i = t !== void 0 ? t : $e[e] || "i";
  return /* @__PURE__ */ c(
    "div",
    {
      className: `nxp-alert nxp-alert--${e} ${a}`,
      role: "alert",
      children: [
        /* @__PURE__ */ n("span", { className: "nxp-alert__icon", "aria-hidden": "true", children: i }),
        /* @__PURE__ */ n("div", { className: "nxp-alert__body", children: r })
      ]
    }
  );
}
function yn({ children: e, size: t = "md", src: r, alt: a = "", className: i = "" }) {
  return /* @__PURE__ */ n("span", { className: `nxp-avatar${t === "sm" ? " nxp-avatar--sm" : t === "lg" ? " nxp-avatar--lg" : ""} ${i}`, "aria-label": a || e, children: r ? /* @__PURE__ */ n("img", { src: r, alt: a }) : e });
}
function wn({ variant: e = "default", children: t, className: r = "" }) {
  return e === "gradient" ? /* @__PURE__ */ n("span", { className: `nxp-badge nxp-badge--gradient ${r}`, children: t }) : ["primary", "success", "warning", "error"].includes(e) ? /* @__PURE__ */ n("span", { className: `nxp-badge nxp-badge--${e} ${r}`, children: t }) : /* @__PURE__ */ n("span", { className: `nxp-badge ${r}`, children: t });
}
const Me = {
  default: "🚀",
  success: "✅",
  warning: "⚠️",
  error: "❌"
};
function Dn({ variant: e = "default", icon: t, title: r, text: a, actions: i, className: s = "" }) {
  const l = t !== void 0 ? t : Me[e], o = e !== "default" ? ` nxp-banner--${e}` : "";
  return /* @__PURE__ */ c("div", { className: `nxp-banner${o} ${s}`, role: "region", children: [
    l && /* @__PURE__ */ n("span", { className: "nxp-banner__icon", "aria-hidden": "true", children: l }),
    /* @__PURE__ */ c("div", { className: "nxp-banner__body", children: [
      r && /* @__PURE__ */ n("div", { className: "nxp-banner__title", children: r }),
      a && /* @__PURE__ */ n("p", { className: "nxp-banner__text", children: a }),
      i && /* @__PURE__ */ n("div", { className: "nxp-banner__actions", children: i })
    ] })
  ] });
}
function $n({
  variant: e = "secondary",
  size: t,
  icon: r = !1,
  loading: a = !1,
  disabled: i = !1,
  onClick: s,
  children: l,
  className: o = "",
  ...u
}) {
  const d = [
    "nxp-btn",
    `nxp-btn--${e}`,
    t && t !== "md" ? `nxp-btn--${t}` : "",
    r ? "nxp-btn--icon" : "",
    a ? "nxp-btn--loading" : "",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "button",
    {
      className: d,
      disabled: i || a,
      onClick: s,
      "aria-disabled": i || a,
      ...u,
      children: [
        a && /* @__PURE__ */ n("span", { className: "nxp-btn__spinner", "aria-hidden": "true" }),
        l
      ]
    }
  );
}
function Mn({ slides: e = [], className: t = "" }) {
  const [r, a] = C(0), i = H(null), s = A((l) => {
    if (!i.current) return;
    const o = i.current.children[l];
    o && o.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" }), a(l);
  }, []);
  return P(() => {
    const l = i.current;
    if (!l) return;
    let o;
    const u = () => {
      cancelAnimationFrame(o), o = requestAnimationFrame(() => {
        const d = l.offsetWidth, h = Math.round(l.scrollLeft / d);
        a(Math.min(Math.max(0, h), e.length - 1));
      });
    };
    return l.addEventListener("scroll", u, { passive: !0 }), () => {
      l.removeEventListener("scroll", u), cancelAnimationFrame(o);
    };
  }, [e.length]), /* @__PURE__ */ c("div", { className: `nxp-carousel ${t}`, children: [
    /* @__PURE__ */ n("div", { className: "nxp-carousel__track", ref: i, children: e.map((l, o) => /* @__PURE__ */ c("div", { className: "nxp-carousel__slide", children: [
      l.eyebrow && /* @__PURE__ */ n("span", { className: "nxp-carousel__eyebrow", children: l.eyebrow }),
      /* @__PURE__ */ n("div", { className: "nxp-carousel__title", children: l.title }),
      l.description && /* @__PURE__ */ n("p", { className: "nxp-carousel__desc", children: l.description }),
      l.cta && /* @__PURE__ */ c(
        "a",
        {
          className: "nxp-carousel__cta",
          href: l.ctaHref || "#",
          onClick: l.ctaHref ? void 0 : (u) => u.preventDefault(),
          children: [
            l.cta,
            " →"
          ]
        }
      )
    ] }, o)) }),
    /* @__PURE__ */ c("div", { className: "nxp-carousel__nav", children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-carousel__btn",
          onClick: () => s(r - 1),
          disabled: r === 0,
          "aria-label": "Previous slide",
          children: "‹"
        }
      ),
      /* @__PURE__ */ n("div", { className: "nxp-carousel__dots", children: e.map((l, o) => /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: `nxp-carousel__dot${r === o ? " is-active" : ""}`,
          onClick: () => s(o),
          "aria-label": `Go to slide ${o + 1}`,
          "aria-current": r === o
        },
        o
      )) }),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-carousel__btn",
          onClick: () => s(r + 1),
          disabled: r === e.length - 1,
          "aria-label": "Next slide",
          children: "›"
        }
      )
    ] })
  ] });
}
function In({
  checked: e,
  onChange: t,
  disabled: r = !1,
  label: a,
  className: i = ""
}) {
  const s = e !== void 0, [l, o] = C(!1), u = s ? e : l, d = ke(), h = A(() => {
    r || (s ? t && t(!e) : o((_) => !_));
  }, [r, s, e, t]), p = [
    "nxp-checkbox",
    u ? "is-checked" : "",
    r ? "is-disabled" : "",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("label", { className: p, htmlFor: d, children: [
    /* @__PURE__ */ n(
      "input",
      {
        id: d,
        type: "checkbox",
        checked: u,
        onChange: h,
        disabled: r,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        className: "nxp-checkbox__box",
        role: "checkbox",
        "aria-checked": u,
        "aria-disabled": r,
        tabIndex: r ? -1 : 0,
        onKeyDown: (_) => {
          _.key === " " && (_.preventDefault(), h());
        },
        onClick: (_) => {
          _.preventDefault(), h();
        },
        children: u && /* @__PURE__ */ n("svg", { className: "nxp-checkbox__check", viewBox: "0 0 9 7", fill: "none", children: /* @__PURE__ */ n("path", { d: "M1 3.5L3.5 6L8 1", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    a && /* @__PURE__ */ n("span", { children: a })
  ] });
}
function Ln({ options: e = [], value: t, onChange: r, placeholder: a = "Type to search…", className: i = "" }) {
  var y;
  const s = t !== void 0, [l, o] = C(""), [u, d] = C(!1), [h, p] = C(-1), _ = H(null), N = H(null), k = e.filter(
    (x) => x.label.toLowerCase().includes(l.toLowerCase())
  );
  s && ((y = e.find((x) => x.value === t)) != null && y.label), P(() => {
    var x;
    if (s && t) {
      const I = ((x = e.find((L) => L.value === t)) == null ? void 0 : x.label) || "";
      o(I);
    }
  }, [t, s, e]);
  const m = A(
    (x) => {
      r && r(x.value), o(x.label), d(!1), p(-1);
    },
    [s, r]
  );
  P(() => {
    if (!u) return;
    const x = (I) => {
      N.current && !N.current.contains(I.target) && d(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [u]);
  const f = (x) => {
    if (!u && (x.key === "ArrowDown" || x.key === "Enter")) {
      d(!0), p(0);
      return;
    }
    u && (x.key === "ArrowDown" ? (x.preventDefault(), p((I) => Math.min(I + 1, k.length - 1))) : x.key === "ArrowUp" ? (x.preventDefault(), p((I) => Math.max(I - 1, 0))) : x.key === "Home" ? (x.preventDefault(), p(0)) : x.key === "End" ? (x.preventDefault(), p(k.length - 1)) : x.key === "Enter" && h >= 0 && k[h] ? (x.preventDefault(), m(k[h])) : x.key === "Escape" && (d(!1), p(-1)));
  };
  return /* @__PURE__ */ c("div", { className: `nxp-combobox ${i}`, ref: N, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: _,
        type: "text",
        className: "nxp-combobox__input",
        value: l,
        placeholder: a,
        onChange: (x) => {
          o(x.target.value), d(!0), p(-1);
        },
        onFocus: () => d(!0),
        onKeyDown: f,
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-expanded": u,
        "aria-haspopup": "listbox"
      }
    ),
    u && k.length > 0 && /* @__PURE__ */ n("div", { className: "nxp-combobox__list", role: "listbox", children: k.map((x, I) => /* @__PURE__ */ n(
      "div",
      {
        className: `nxp-combobox__item${h === I ? " is-focused" : ""}`,
        role: "option",
        "aria-selected": h === I,
        onMouseEnter: () => p(I),
        onMouseDown: (L) => {
          L.preventDefault(), m(x);
        },
        children: x.label
      },
      x.value
    )) })
  ] });
}
function Bn({
  open: e = !0,
  onClose: t,
  icon: r,
  iconVariant: a = "warning",
  title: i,
  description: s,
  actions: l,
  className: o = ""
}) {
  return e ? /* @__PURE__ */ c(
    "div",
    {
      className: `nxp-dialog ${o}`,
      role: "alertdialog",
      "aria-modal": "true",
      "aria-label": i,
      children: [
        r && /* @__PURE__ */ n("div", { className: `nxp-dialog__icon nxp-dialog__icon--${a}`, "aria-hidden": "true", children: r }),
        i && /* @__PURE__ */ n("div", { className: "nxp-dialog__title", children: i }),
        s && /* @__PURE__ */ n("p", { className: "nxp-dialog__desc", children: s }),
        l && /* @__PURE__ */ n("div", { className: "nxp-dialog__actions", children: l })
      ]
    }
  ) : null;
}
function Cn({
  options: e = [],
  value: t,
  onChange: r,
  placeholder: a = "Select…",
  disabled: i = !1,
  className: s = ""
}) {
  var w;
  const l = t !== void 0, [o, u] = C(""), d = l ? t : o, [h, p] = C(!1), [_, N] = C(-1), k = H(null), m = H(null), f = e.filter((v) => !v.divider), y = (w = e.find((v) => v.value === d)) == null ? void 0 : w.label, x = A(() => {
    p(!1), N(-1);
  }, []), I = A(
    (v) => {
      l || u(v.value), r && r(v.value), x();
    },
    [l, r, x]
  );
  P(() => {
    if (!h) return;
    const v = (S) => {
      k.current && !k.current.contains(S.target) && x();
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [h, x]);
  const L = (v) => {
    if (!h) {
      (v.key === "Enter" || v.key === " " || v.key === "ArrowDown") && (v.preventDefault(), p(!0), N(0));
      return;
    }
    const S = f;
    v.key === "ArrowDown" ? (v.preventDefault(), N((E) => Math.min(E + 1, S.length - 1))) : v.key === "ArrowUp" ? (v.preventDefault(), N((E) => Math.max(E - 1, 0))) : v.key === "Home" ? (v.preventDefault(), N(0)) : v.key === "End" ? (v.preventDefault(), N(S.length - 1)) : v.key === "Enter" && _ >= 0 ? (v.preventDefault(), I(S[_])) : v.key === "Escape" && (v.preventDefault(), x());
  };
  let D = -1;
  return /* @__PURE__ */ c(
    "div",
    {
      className: `nxp-dropdown${h ? " is-open" : ""} ${s}`,
      ref: k,
      children: [
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            className: "nxp-dropdown__trigger",
            disabled: i,
            "aria-haspopup": "listbox",
            "aria-expanded": h,
            onClick: () => {
              i || p((v) => !v);
            },
            onKeyDown: L,
            children: [
              /* @__PURE__ */ n("span", { style: { color: d ? "var(--nxp-text)" : "var(--nxp-text-faint)" }, children: y || a }),
              /* @__PURE__ */ n("svg", { className: "nxp-dropdown__chevron", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ n("path", { d: "M3 5l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        ),
        h && /* @__PURE__ */ n(
          "div",
          {
            className: "nxp-dropdown__menu",
            role: "listbox",
            ref: m,
            "aria-label": "Options",
            children: e.map((v, S) => {
              if (v.divider)
                return /* @__PURE__ */ n("div", { className: "nxp-dropdown__divider" }, S);
              D++;
              const E = D, T = v.value === d;
              return /* @__PURE__ */ c(
                "div",
                {
                  className: `nxp-dropdown__item${T ? " is-selected" : ""}${_ === E ? " is-focused" : ""}`,
                  role: "option",
                  "aria-selected": T,
                  onClick: () => I(v),
                  onMouseEnter: () => N(E),
                  children: [
                    /* @__PURE__ */ n("span", { style: { flex: 1 }, children: v.label }),
                    v.sub && /* @__PURE__ */ n("span", { className: "nxp-dropdown__sub", children: v.sub }),
                    T && /* @__PURE__ */ n("svg", { className: "nxp-dropdown__check", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ n("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                  ]
                },
                v.value
              );
            })
          }
        )
      ]
    }
  );
}
function En({ icon: e, title: t, description: r, action: a, className: i = "" }) {
  return /* @__PURE__ */ c("div", { className: `nxp-empty ${i}`, role: "status", children: [
    e && /* @__PURE__ */ n("div", { className: "nxp-empty__icon", "aria-hidden": "true", children: e }),
    t && /* @__PURE__ */ n("div", { className: "nxp-empty__title", children: t }),
    r && /* @__PURE__ */ n("p", { className: "nxp-empty__desc", children: r }),
    a && /* @__PURE__ */ n("div", { style: { marginTop: 8 }, children: a })
  ] });
}
function de({ content: e, children: t, className: r = "" }) {
  const [a, i] = C(!1), [s, l] = C({ top: 0, left: 0 }), o = H(null), u = H(null), d = A(() => {
    var y, x;
    if (!o.current) return;
    const _ = o.current.getBoundingClientRect(), N = ((y = u.current) == null ? void 0 : y.offsetWidth) || 120, k = ((x = u.current) == null ? void 0 : x.offsetHeight) || 30;
    let m = _.top - k - 6 + window.scrollY, f = _.left + _.width / 2 - N / 2 + window.scrollX;
    f = Math.max(8, Math.min(f, window.innerWidth - N - 8)), m < 4 && (m = _.bottom + 6 + window.scrollY), l({ top: m, left: f });
  }, []), h = A(() => {
    i(!0), requestAnimationFrame(d);
  }, [d]), p = A(() => i(!1), []);
  return P(() => {
    if (a)
      return window.addEventListener("scroll", d, !0), window.addEventListener("resize", d), () => {
        window.removeEventListener("scroll", d, !0), window.removeEventListener("resize", d);
      };
  }, [a, d]), /* @__PURE__ */ c(be, { children: [
    /* @__PURE__ */ n(
      "span",
      {
        ref: o,
        className: `nxp-tooltip-wrap ${r}`,
        onMouseEnter: h,
        onMouseLeave: p,
        onFocus: h,
        onBlur: p,
        children: t
      }
    ),
    a && e && ce(
      /* @__PURE__ */ n(
        "div",
        {
          ref: u,
          className: "nxp-tooltip",
          style: { top: s.top, left: s.left },
          role: "tooltip",
          children: e
        }
      ),
      document.body
    )
  ] });
}
const Ie = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ n("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ n("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] });
function Sn({
  label: e,
  tooltip: t,
  hint: r,
  error: a,
  required: i = !1,
  htmlFor: s,
  children: l,
  className: o = ""
}) {
  return /* @__PURE__ */ c("div", { className: `nxp-field${a ? " nxp-field--error" : ""} ${o}`, children: [
    e && /* @__PURE__ */ c("div", { className: "nxp-field__label-row", children: [
      /* @__PURE__ */ c("label", { className: "nxp-field__label", htmlFor: s, children: [
        e,
        i && /* @__PURE__ */ n("span", { className: "nxp-field__required", "aria-hidden": "true", children: " *" })
      ] }),
      t && /* @__PURE__ */ n(de, { content: t, children: /* @__PURE__ */ n(
        "span",
        {
          className: "nxp-field__tooltip-icon",
          tabIndex: 0,
          role: "button",
          "aria-label": "More information",
          children: /* @__PURE__ */ n(Ie, {})
        }
      ) })
    ] }),
    l,
    r && !a && /* @__PURE__ */ n("span", { className: "nxp-field__hint", children: r }),
    a && /* @__PURE__ */ n("span", { className: "nxp-field__error", role: "alert", children: a })
  ] });
}
function jn({ topline: e, icon: t, title: r, description: a, cta: i, href: s, step: l, className: o = "" }) {
  return /* @__PURE__ */ c("div", { className: `nxp-iconbox ${o}`, children: [
    e && /* @__PURE__ */ n("div", { className: "nxp-iconbox__topline", children: e }),
    l !== void 0 && /* @__PURE__ */ n("div", { className: "nxp-iconbox__step", children: l }),
    t && !l && /* @__PURE__ */ n("div", { className: "nxp-iconbox__icon", "aria-hidden": "true", children: t }),
    r && /* @__PURE__ */ n("div", { className: "nxp-iconbox__title", children: r }),
    a && /* @__PURE__ */ n("p", { className: "nxp-iconbox__desc", children: a }),
    i && /* @__PURE__ */ c("a", { className: "nxp-iconbox__cta", href: s || "#", onClick: s ? void 0 : (u) => u.preventDefault(), children: [
      i,
      " →"
    ] })
  ] });
}
function An({
  type: e = "text",
  placeholder: t,
  value: r,
  onChange: a,
  disabled: i = !1,
  invalid: s = !1,
  className: l = "",
  ...o
}) {
  const u = ["nxp-input", s ? "nxp-input--invalid" : "", l].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(
    "input",
    {
      type: e,
      className: u,
      placeholder: t,
      value: r,
      onChange: a,
      disabled: i,
      "aria-invalid": s ? "true" : void 0,
      ...o
    }
  );
}
function Wn({ children: e, className: t = "" }) {
  return /* @__PURE__ */ n("kbd", { className: `nxp-kbd ${t}`, children: e });
}
function Fn({
  open: e = !1,
  onClose: t,
  size: r = "md",
  title: a,
  byline: i,
  children: s,
  footer: l,
  className: o = ""
}) {
  P(() => {
    if (e) {
      const h = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = h;
      };
    }
  }, [e]);
  const u = A(
    (h) => {
      h.key === "Escape" && t && t();
    },
    [t]
  );
  if (P(() => {
    if (e)
      return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [e, u]), !e) return null;
  const d = r !== "md" ? ` nxp-modal--${r}` : "";
  return ce(
    /* @__PURE__ */ n(
      "div",
      {
        className: "nxp-modal-backdrop",
        onMouseDown: (h) => {
          h.target === h.currentTarget && t && t();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": a,
        children: /* @__PURE__ */ c("div", { className: `nxp-modal${d} ${o}`, children: [
          /* @__PURE__ */ c("div", { className: "nxp-modal__head", children: [
            /* @__PURE__ */ c("div", { style: { flex: 1 }, children: [
              a && /* @__PURE__ */ n("div", { className: "nxp-modal__title", children: a }),
              i && /* @__PURE__ */ n("div", { className: "nxp-modal__byline", children: i })
            ] }),
            t && /* @__PURE__ */ n("button", { type: "button", className: "nxp-modal__close", "aria-label": "Close modal", onClick: t, children: "×" })
          ] }),
          /* @__PURE__ */ n("div", { className: "nxp-modal__body", children: s }),
          l && /* @__PURE__ */ n("div", { className: "nxp-modal__foot", children: l })
        ] })
      }
    ),
    document.body
  );
}
const pe = {
  default: "ℹ",
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✕"
};
function Tn({
  variant: e = "default",
  icon: t,
  children: r,
  onDismiss: a,
  dismissible: i = !0,
  className: s = ""
}) {
  const [l, o] = C(!1), [u, d] = C(!1), h = A(() => {
    o(!0), setTimeout(() => {
      d(!0), a && a();
    }, 220);
  }, [a]);
  if (u) return null;
  const p = t !== void 0 ? t : pe[e] || pe.default, _ = e !== "default" ? ` nxp-notice--${e}` : "";
  return /* @__PURE__ */ c(
    "div",
    {
      className: `nxp-notice${_}${l ? " is-dismissing" : ""} ${s}`,
      role: "status",
      children: [
        /* @__PURE__ */ n("span", { className: "nxp-notice__icon", "aria-hidden": "true", children: p }),
        /* @__PURE__ */ n("div", { className: "nxp-notice__body", children: r }),
        i && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "nxp-notice__close",
            "aria-label": "Dismiss",
            onClick: h,
            children: "×"
          }
        )
      ]
    }
  );
}
function Pn({ page: e, totalPages: t = 1, onChange: r, showPrevNext: a = !0, className: i = "" }) {
  const s = e !== void 0, [l, o] = C(1), u = s ? e : l, d = A(
    (p) => {
      const _ = Math.min(t, Math.max(1, p));
      s || o(_), r && r(_);
    },
    [s, r, t]
  ), h = Array.from({ length: t }, (p, _) => _ + 1);
  return /* @__PURE__ */ c("nav", { className: `nxp-pagination ${i}`, "aria-label": "Pagination", children: [
    a && /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--prev",
        onClick: () => d(u - 1),
        disabled: u === 1,
        "aria-label": "Previous page",
        children: "‹"
      }
    ),
    h.map((p) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: `nxp-pagination__item${u === p ? " is-active" : ""}`,
        onClick: () => d(p),
        "aria-current": u === p ? "page" : void 0,
        children: p
      },
      p
    )),
    a && /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-pagination__item nxp-pagination__item--next",
        onClick: () => d(u + 1),
        disabled: u === t,
        "aria-label": "Next page",
        children: "›"
      }
    )
  ] });
}
function Rn({ title: e, description: t, footer: r, className: a = "" }) {
  return /* @__PURE__ */ c("div", { className: `nxp-popover ${a}`, role: "tooltip", children: [
    e && /* @__PURE__ */ n("div", { className: "nxp-popover__title", children: e }),
    t && /* @__PURE__ */ n("p", { className: "nxp-popover__desc", children: t }),
    r && /* @__PURE__ */ n("div", { className: "nxp-popover__footer", children: r })
  ] });
}
function On({ value: e = 0, variant: t = "default", className: r = "" }) {
  const a = Math.min(100, Math.max(0, e)), i = t !== "default" ? ` nxp-progress--${t}` : "";
  return /* @__PURE__ */ n(
    "div",
    {
      className: `nxp-progress${i} ${r}`,
      role: "progressbar",
      "aria-valuenow": a,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: /* @__PURE__ */ n("div", { className: "nxp-progress__bar", style: { width: `${a}%` } })
    }
  );
}
function Hn({
  checked: e = !1,
  onChange: t,
  disabled: r = !1,
  name: a,
  value: i,
  label: s,
  className: l = ""
}) {
  const o = ke(), u = [
    "nxp-radio",
    e ? "is-checked" : "",
    r ? "is-disabled" : "",
    l
  ].filter(Boolean).join(" "), d = () => {
    r || t && t(i);
  };
  return /* @__PURE__ */ c("label", { className: u, htmlFor: o, children: [
    /* @__PURE__ */ n(
      "input",
      {
        id: o,
        type: "radio",
        name: a,
        value: i,
        checked: e,
        onChange: d,
        disabled: r,
        style: { position: "absolute", opacity: 0, width: 0, height: 0 },
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        className: "nxp-radio__dot",
        role: "radio",
        "aria-checked": e,
        "aria-disabled": r,
        tabIndex: r ? -1 : 0,
        onKeyDown: (h) => {
          h.key === " " && (h.preventDefault(), d());
        },
        onClick: (h) => {
          h.preventDefault(), d();
        },
        children: /* @__PURE__ */ n("span", { className: "nxp-radio__inner" })
      }
    ),
    s && /* @__PURE__ */ n("span", { children: s })
  ] });
}
function Un({ value: e, onChange: t, placeholder: r = "Search…", onClear: a, className: i = "" }) {
  const s = e !== void 0, [l, o] = C(""), u = s ? e : l, d = A(
    (h) => {
      const p = h.target.value;
      s || o(p), t && t(p);
    },
    [s, t]
  );
  return /* @__PURE__ */ c("div", { className: `nxp-search ${i}`, children: [
    /* @__PURE__ */ n("span", { className: "nxp-search__icon", "aria-hidden": "true", children: "⌕" }),
    /* @__PURE__ */ n(
      "input",
      {
        type: "search",
        className: "nxp-search__input",
        value: u,
        onChange: d,
        placeholder: r,
        "aria-label": r
      }
    )
  ] });
}
function Kn({ options: e = [], value: t, onChange: r, className: a = "" }) {
  var d;
  const i = t !== void 0, [s, l] = C((d = e[0]) == null ? void 0 : d.value), o = i ? t : s, u = A(
    (h) => {
      i || l(h), r && r(h);
    },
    [i, r]
  );
  return /* @__PURE__ */ n("div", { className: `nxp-segmented ${a}`, role: "group", "aria-label": "Segmented control", children: e.map((h) => /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      className: `nxp-segmented__option${o === h.value ? " is-selected" : ""}`,
      onClick: () => u(h.value),
      "aria-pressed": o === h.value,
      children: h.label
    },
    h.value
  )) });
}
function Yn({
  options: e = [],
  value: t,
  onChange: r,
  disabled: a = !1,
  placeholder: i,
  className: s = "",
  ...l
}) {
  return /* @__PURE__ */ c(
    "select",
    {
      className: `nxp-select ${s}`,
      value: t,
      onChange: r,
      disabled: a,
      ...l,
      children: [
        i && /* @__PURE__ */ n("option", { value: "", disabled: !0, children: i }),
        e.map((o) => /* @__PURE__ */ n("option", { value: o.value, children: o.label }, o.value))
      ]
    }
  );
}
function Vn({ title: e, byline: t, children: r, footer: a, className: i = "" }) {
  return /* @__PURE__ */ c("div", { className: `nxp-sheet ${i}`, children: [
    (e || t) && /* @__PURE__ */ c("div", { className: "nxp-sheet__head", children: [
      e && /* @__PURE__ */ n("div", { className: "nxp-sheet__title", children: e }),
      t && /* @__PURE__ */ n("div", { className: "nxp-sheet__byline", children: t })
    ] }),
    /* @__PURE__ */ n("div", { className: "nxp-sheet__body", children: r }),
    a && /* @__PURE__ */ n("div", { className: "nxp-sheet__foot", children: a })
  ] });
}
function qn({ variant: e = "line", width: t, style: r = {}, className: a = "" }) {
  const i = e === "circle" ? " nxp-skeleton--circle" : e === "title" ? " nxp-skeleton--title" : "", s = { ...t ? { width: t } : {}, ...r };
  return /* @__PURE__ */ n(
    "span",
    {
      className: `nxp-skeleton${i} ${a}`,
      style: s,
      "aria-hidden": "true",
      role: "presentation"
    }
  );
}
function Jn({
  /* numeric value */
  min: e = 0,
  max: t = 100,
  step: r = 1,
  value: a,
  // controlled
  defaultValue: i = 50,
  // uncontrolled seed
  onChange: s,
  // (numericValue) => void
  /* label */
  label: l,
  /* static unit — string | false */
  unit: o = "px",
  /* dynamic units — string[] — triggers dropdown */
  units: u,
  // e.g. ['px', '%', 'rem', 'em']
  onUnitChange: d,
  // controlled unit handler (unit: string) => void
  disabled: h = !1,
  className: p = ""
}) {
  const _ = a !== void 0, [N, k] = C(i), m = _ ? a : N, f = Array.isArray(u) && u.length > 0, y = f ? u[0] : o || "", x = f && d !== void 0 && o !== void 0 && o !== !1, [I, L] = C(y), D = x ? o : I, w = H(null), v = Math.round((m - e) / (t - e) * 100);
  P(() => {
    w.current && w.current.style.setProperty("--val", String(v));
  }, [v]);
  const S = A((b) => {
    const j = Number(b.target.value);
    _ || k(j), s == null || s(j);
  }, [_, s]), E = A((b) => {
    const j = b.target.value;
    if (j === "") {
      _ || k("");
      return;
    }
    const M = Math.min(t, Math.max(e, Number(j)));
    isNaN(M) || (_ || k(M), s == null || s(M));
  }, [_, e, t, s]), T = A((b) => {
    b.target.value === "" && (_ || k(e), s == null || s(e));
  }, [_, e, s]), U = A((b) => {
    const j = b.target.value;
    x || L(j), d == null || d(j);
  }, [x, d]), R = !f && o !== !1 && D ? /* @__PURE__ */ n("span", { className: "nxp-slider__unit-suffix", children: D }) : null, K = f ? /* @__PURE__ */ n(
    "select",
    {
      className: "nxp-slider__unit-select",
      value: D,
      onChange: U,
      disabled: h,
      "aria-label": "Unit",
      children: u.map((b) => /* @__PURE__ */ n("option", { value: b, children: b }, b))
    }
  ) : null, V = ["nxp-slider", h ? "nxp-slider--disabled" : "", p].filter(Boolean).join(" "), $ = l ? `nxp-slider-${l.replace(/\s+/g, "-").toLowerCase()}` : void 0;
  return /* @__PURE__ */ c("div", { className: V, children: [
    /* @__PURE__ */ c("div", { className: "nxp-slider__header", children: [
      l && /* @__PURE__ */ n("label", { className: "nxp-slider__label", htmlFor: $, children: l }),
      /* @__PURE__ */ c("div", { className: "nxp-slider__controls", children: [
        K,
        /* @__PURE__ */ c("div", { className: "nxp-slider__input-wrap", children: [
          /* @__PURE__ */ n(
            "input",
            {
              type: "number",
              className: "nxp-slider__input",
              value: m,
              min: e,
              max: t,
              step: r,
              disabled: h,
              onChange: E,
              onBlur: T,
              "aria-label": l ? `${l} value` : "Slider value"
            }
          ),
          R
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n(
      "input",
      {
        id: $,
        ref: w,
        type: "range",
        className: "nxp-slider__range",
        min: e,
        max: t,
        step: r,
        value: m === "" ? e : m,
        onChange: S,
        disabled: h,
        style: { "--val": v },
        "aria-valuemin": e,
        "aria-valuemax": t,
        "aria-valuenow": m === "" ? e : m,
        "aria-label": l ?? "Slider"
      }
    )
  ] });
}
function zn({ size: e = "md", className: t = "" }) {
  return /* @__PURE__ */ n(
    "span",
    {
      className: `nxp-spinner${e === "sm" ? " nxp-spinner--sm" : e === "lg" ? " nxp-spinner--lg" : ""} ${t}`,
      role: "status",
      "aria-label": "Loading"
    }
  );
}
function Gn({ label: e, value: t, meta: r, className: a = "" }) {
  return /* @__PURE__ */ c("div", { className: `nxp-stat ${a}`, children: [
    e && /* @__PURE__ */ n("div", { className: "nxp-stat__label", children: e }),
    t !== void 0 && /* @__PURE__ */ n("div", { className: "nxp-stat__value", children: t }),
    r && /* @__PURE__ */ n("div", { className: "nxp-stat__meta", children: r })
  ] });
}
function Xn({ variant: e = "default", children: t, className: r = "" }) {
  const a = e !== "default" ? ` nxp-status--${e}` : "";
  return /* @__PURE__ */ n("span", { className: `nxp-status${a} ${r}`, "aria-label": `Status: ${e}`, children: t });
}
function Zn({
  value: e,
  onChange: t,
  min: r = 0,
  max: a,
  step: i = 1,
  disabled: s = !1,
  className: l = ""
}) {
  const o = e !== void 0, [u, d] = C(0), h = o ? e : u, p = A(
    (m) => {
      const f = a !== void 0 ? Math.min(a, Math.max(r, m)) : Math.max(r, m);
      o || d(f), t && t(f);
    },
    [o, t, r, a]
  ), _ = (m) => {
    const f = parseInt(m.target.value, 10);
    isNaN(f) || p(f);
  }, N = h <= r, k = a !== void 0 && h >= a;
  return /* @__PURE__ */ c("div", { className: `nxp-stepper ${l}`, "aria-label": "Stepper", children: [
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-stepper__btn",
        onClick: () => p(h - i),
        disabled: s || N,
        "aria-label": "Decrease",
        children: "−"
      }
    ),
    /* @__PURE__ */ n(
      "input",
      {
        type: "number",
        className: "nxp-stepper__input",
        value: h,
        onChange: _,
        disabled: s,
        min: r,
        max: a,
        step: i,
        "aria-label": "Value"
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-stepper__btn",
        onClick: () => p(h + i),
        disabled: s || k,
        "aria-label": "Increase",
        children: "+"
      }
    )
  ] });
}
function Qn({ columns: e = [], rows: t = [], striped: r = !1, actions: a, className: i = "" }) {
  return /* @__PURE__ */ n("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ c("table", { className: `nxp-table${r ? " nxp-table--striped" : ""} ${i}`, children: [
    /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ c("tr", { children: [
      e.map((s) => /* @__PURE__ */ n("th", { className: s.numeric ? "nxp-table__num" : "", children: s.label }, s.key)),
      a && /* @__PURE__ */ n("th", { style: { textAlign: "right" }, children: "Actions" })
    ] }) }),
    /* @__PURE__ */ n("tbody", { children: t.map((s, l) => /* @__PURE__ */ c("tr", { children: [
      e.map((o) => /* @__PURE__ */ n("td", { className: o.numeric ? "nxp-table__num" : "", children: s[o.key] }, o.key)),
      a && /* @__PURE__ */ n("td", { children: /* @__PURE__ */ n("div", { className: "nxp-table__actions", children: a(s) }) })
    ] }, l)) })
  ] }) });
}
function et({
  variant: e = "pill",
  tabs: t = [],
  activeTab: r,
  onTabChange: a,
  defaultTab: i,
  className: s = ""
}) {
  const l = r !== void 0, [o, u] = C(i || t[0] && t[0].id), d = l ? r : o, [h, p] = C({}), _ = A(
    (f) => {
      l || u(f), a && a(f);
    },
    [l, a]
  ), N = e !== "pill" ? ` nxp-tabs--${e}` : "", k = e === "vertical", m = t.find((f) => f.id === d);
  return /* @__PURE__ */ c("div", { className: `nxp-tabs${N} ${s}`, role: "tablist", children: [
    /* @__PURE__ */ n("div", { className: "nxp-tabs__list", children: t.map((f) => /* @__PURE__ */ c(Ne.Fragment, { children: [
      /* @__PURE__ */ n(
        "button",
        {
          className: `nxp-tabs__tab${d === f.id ? " is-active" : ""}`,
          role: "tab",
          "aria-selected": d === f.id,
          onClick: () => _(f.id),
          children: f.label
        }
      ),
      k && f.subTabs && d === f.id && /* @__PURE__ */ n("div", { className: "nxp-tabs__sub-list", children: f.subTabs.map((y) => /* @__PURE__ */ n(
        "button",
        {
          className: `nxp-tabs__sub${h[f.id] === y.id ? " is-active" : ""}`,
          onClick: () => p((x) => ({ ...x, [f.id]: y.id })),
          children: y.label
        },
        y.id
      )) })
    ] }, f.id)) }),
    m && m.content && /* @__PURE__ */ n("div", { className: `nxp-tabs__panel${k ? " nxp-tabs__content" : ""}`, role: "tabpanel", children: m.content })
  ] });
}
function nt({ variant: e = "default", children: t, className: r = "" }) {
  const a = e !== "default" ? ` nxp-tag--${e}` : "";
  return /* @__PURE__ */ n("span", { className: `nxp-tag${a} ${r}`, children: t });
}
function tt({
  value: e,
  defaultValue: t,
  onChange: r,
  placeholder: a,
  rows: i = 4,
  disabled: s = !1,
  invalid: l = !1,
  maxLength: o,
  showCount: u = !1,
  className: d = "",
  ...h
}) {
  const p = e !== void 0, [_, N] = C(t ?? ""), k = p ? e : _;
  function m(y) {
    p || N(y.target.value), r == null || r(y);
  }
  const f = [
    "nxp-textarea",
    l ? "nxp-textarea--invalid" : "",
    s ? "nxp-textarea--disabled" : "",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: f, children: [
    /* @__PURE__ */ n(
      "textarea",
      {
        className: "nxp-textarea__control",
        value: k,
        onChange: m,
        placeholder: a,
        rows: i,
        disabled: s,
        maxLength: o,
        "aria-invalid": l || void 0,
        ...h
      }
    ),
    u && o != null && /* @__PURE__ */ c("span", { className: "nxp-textarea__count", children: [
      k.length,
      "/",
      o
    ] })
  ] });
}
function rt({ variant: e = "default", icon: t, title: r, description: a, onClose: i, className: s = "" }) {
  const o = t !== void 0 ? t : e === "error" ? "✕" : "✓";
  return /* @__PURE__ */ c("div", { className: `nxp-toast${e !== "default" ? ` nxp-toast--${e}` : ""} ${s}`, role: "alert", "aria-live": "assertive", children: [
    o && /* @__PURE__ */ n("span", { className: "nxp-toast__icon", "aria-hidden": "true", children: o }),
    /* @__PURE__ */ c("div", { className: "nxp-toast__body", children: [
      r && /* @__PURE__ */ n("div", { className: "nxp-toast__title", children: r }),
      a && /* @__PURE__ */ n("div", { className: "nxp-toast__desc", children: a })
    ] }),
    i && /* @__PURE__ */ n("button", { type: "button", className: "nxp-toast__close", "aria-label": "Close", onClick: i, children: "×" })
  ] });
}
function ge({
  checked: e,
  onChange: t,
  disabled: r = !1,
  variant: a,
  label: i,
  className: s = ""
}) {
  const l = e !== void 0, [o, u] = C(!1), d = l ? e : o, h = A(() => {
    r || (l ? t && t(!e) : u((N) => !N));
  }, [r, l, e, t]), p = A(
    (N) => {
      N.key === " " && (N.preventDefault(), h());
    },
    [h]
  ), _ = [
    "nxp-toggle",
    d ? "is-checked" : "",
    r ? "is-disabled" : "",
    a ? `nxp-toggle--${a}` : "",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "div",
    {
      className: _,
      role: "switch",
      "aria-checked": d,
      "aria-disabled": r,
      tabIndex: r ? -1 : 0,
      onClick: h,
      onKeyDown: p,
      children: [
        /* @__PURE__ */ n("span", { className: "nxp-toggle__track", children: /* @__PURE__ */ n("span", { className: "nxp-toggle__thumb" }) }),
        i && /* @__PURE__ */ n("span", { children: i })
      ]
    }
  );
}
const Le = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ n("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ n("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] }), Be = () => /* @__PURE__ */ c("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M7.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M12.03 9.22a1 1 0 0 0 .2 1.1l.04.04a1.21 1.21 0 0 1-1.71 1.71l-.04-.04a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.91v.11a1.21 1.21 0 0 1-2.42 0v-.06a1 1 0 0 0-.66-.91 1 1 0 0 0-1.1.2l-.04.04a1.21 1.21 0 0 1-1.71-1.71l.04-.04a1 1 0 0 0 .2-1.1 1 1 0 0 0-.91-.6H2.1a1.21 1.21 0 0 1 0-2.42h.06a1 1 0 0 0 .91-.66 1 1 0 0 0-.2-1.1l-.04-.04a1.21 1.21 0 0 1 1.71-1.71l.04.04a1 1 0 0 0 1.1.2h.05a1 1 0 0 0 .6-.91V2.1a1.21 1.21 0 0 1 2.42 0v.06a1 1 0 0 0 .6.91 1 1 0 0 0 1.1-.2l.04-.04a1.21 1.21 0 0 1 1.71 1.71l-.04.04a1 1 0 0 0-.2 1.1v.05a1 1 0 0 0 .91.6h.11a1.21 1.21 0 0 1 0 2.42h-.06a1 1 0 0 0-.91.6Z",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
] }), Ce = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("rect", { x: "2.5", y: "6.5", width: "9", height: "6.5", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M4.5 6.5V4.5a2.5 2.5 0 0 1 5 0v2",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round"
    }
  )
] }), Ee = () => /* @__PURE__ */ n("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 5.5h7M6 3l3 2.5L6 8", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) }), ue = {
  default: "nxp-ftc__badge",
  primary: "nxp-ftc__badge nxp-ftc__badge--primary",
  success: "nxp-ftc__badge nxp-ftc__badge--success",
  warning: "nxp-ftc__badge nxp-ftc__badge--warning",
  error: "nxp-ftc__badge nxp-ftc__badge--error",
  beta: "nxp-ftc__badge nxp-ftc__badge--beta",
  pro: "nxp-ftc__badge nxp-ftc__badge--pro"
}, Se = {
  pro: "PRO",
  freemium: "FREEMIUM"
};
function at({
  /* content */
  title: e,
  tooltip: t,
  /* plan */
  planType: r = "free",
  // 'free' | 'pro' | 'freemium'
  isLocked: a = !1,
  isNew: i = !1,
  onUpgradeClick: s,
  /* feature-level badge (backward compat) */
  showBadge: l = !1,
  badgeText: o = "BETA",
  badgeVariant: u = "beta",
  /* docs */
  docsLabel: d = "Read Docs",
  docsHref: h,
  onDocsClick: p,
  /* interaction */
  isEnabled: _,
  onToggle: N,
  onChange: k,
  onSettingsClick: m,
  disabled: f = !1,
  className: y = ""
}) {
  const x = r && r !== "free", I = a || f;
  function L(S) {
    k == null || k(S), N == null || N(S);
  }
  const D = [
    "nxp-ftc-outer",
    x ? "nxp-ftc-outer--has-plan" : ""
  ].filter(Boolean).join(" "), w = [
    "nxp-ftc",
    a ? "nxp-ftc--locked" : "",
    f ? "nxp-ftc--disabled" : "",
    y
  ].filter(Boolean).join(" "), v = h ? /* @__PURE__ */ n(
    "a",
    {
      href: h,
      className: "nxp-ftc__link",
      target: "_blank",
      rel: "noopener noreferrer",
      tabIndex: I ? -1 : 0,
      children: d
    }
  ) : /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      className: "nxp-ftc__link nxp-ftc__link--btn",
      onClick: p,
      disabled: I,
      tabIndex: I ? -1 : 0,
      children: d
    }
  );
  return /* @__PURE__ */ c("div", { className: D, children: [
    x && /* @__PURE__ */ n("span", { className: `nxp-ftc-plan nxp-ftc-plan--${r}`, children: Se[r] }),
    /* @__PURE__ */ n("div", { className: w, children: /* @__PURE__ */ c("div", { className: "nxp-ftc__body", children: [
      /* @__PURE__ */ c("div", { className: "nxp-ftc__left", children: [
        /* @__PURE__ */ c("div", { className: "nxp-ftc__title-row", children: [
          /* @__PURE__ */ n("span", { className: "nxp-ftc__title", children: e }),
          i && /* @__PURE__ */ n("span", { className: "nxp-ftc__badge nxp-ftc__badge--new", "aria-label": "New feature", children: "NEW" }),
          l && o && /* @__PURE__ */ n(
            "span",
            {
              className: ue[u] ?? ue.default,
              "aria-label": `${o} feature`,
              children: o
            }
          ),
          t && /* @__PURE__ */ n(de, { content: t, children: /* @__PURE__ */ n(
            "span",
            {
              className: "nxp-ftc__info-icon",
              tabIndex: I ? -1 : 0,
              role: "button",
              "aria-label": `About ${e}`,
              children: /* @__PURE__ */ n(Le, {})
            }
          ) })
        ] }),
        /* @__PURE__ */ c("div", { className: "nxp-ftc__links", children: [
          v,
          a && s && /* @__PURE__ */ c(be, { children: [
            /* @__PURE__ */ n("span", { className: "nxp-ftc__links-sep", "aria-hidden": "true", children: "·" }),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                className: "nxp-ftc__upgrade-link nxp-ftc__link--btn",
                onClick: s,
                children: [
                  "Upgrade",
                  /* @__PURE__ */ n(Ee, {})
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { className: "nxp-ftc__right", children: [
        m && !a && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "nxp-ftc__settings-btn",
            onClick: m,
            disabled: f,
            "aria-label": `${e} settings`,
            tabIndex: f ? -1 : 0,
            children: /* @__PURE__ */ n(Be, {})
          }
        ),
        a ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "nxp-ftc__lock-btn",
            onClick: s,
            "aria-label": `Upgrade to unlock ${e}`,
            title: "Upgrade to unlock",
            children: /* @__PURE__ */ n(Ce, {})
          }
        ) : /* @__PURE__ */ n(
          ge,
          {
            checked: _,
            onChange: L,
            disabled: f,
            "aria-label": `Enable ${e}`
          }
        )
      ] })
    ] }) })
  ] });
}
const je = () => /* @__PURE__ */ c("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("circle", { cx: "7", cy: "7", r: "6.25", stroke: "currentColor", strokeWidth: "1.5" }),
  /* @__PURE__ */ n("path", { d: "M7 6.5v3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
  /* @__PURE__ */ n("circle", { cx: "7", cy: "4.25", r: "0.875", fill: "currentColor" })
] }), Ae = De(function({ itemKey: t, label: r, value: a, tooltip: i, onToggle: s, disabled: l }) {
  return /* @__PURE__ */ c("div", { className: "nxp-tg__item", children: [
    /* @__PURE__ */ c("div", { className: "nxp-tg__item-label-row", children: [
      /* @__PURE__ */ n("span", { className: "nxp-tg__item-label", children: r }),
      i && /* @__PURE__ */ n(de, { content: i, children: /* @__PURE__ */ n(
        "span",
        {
          className: "nxp-tg__item-info",
          tabIndex: 0,
          role: "button",
          "aria-label": `About ${r}`,
          children: /* @__PURE__ */ n(je, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ n(
      ge,
      {
        checked: a,
        onChange: (o) => s(t, o),
        disabled: l,
        "aria-label": `Enable ${r}`
      }
    )
  ] });
});
function st({
  items: e = [],
  columns: t = 2,
  onChange: r,
  valueMap: a,
  disabled: i = !1,
  className: s = ""
}) {
  const l = a !== void 0, [o, u] = C(
    () => Object.fromEntries(e.map((k) => [k.key, k.value ?? !1]))
  );
  function d() {
    return l ? a : o;
  }
  function h(k, m) {
    const y = { ...d(), [k]: m }, x = e.map((I) => ({
      ...I,
      value: y[I.key] ?? I.value ?? !1
    }));
    l || u(y), r == null || r(k, m, x);
  }
  const p = Math.min(Math.max(Number(t) || 2, 1), 4), _ = d(), N = [
    "nxp-tg",
    `nxp-tg--cols-${p}`,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: N, role: "group", children: e.map((k) => /* @__PURE__ */ n(
    Ae,
    {
      itemKey: k.key,
      label: k.label,
      value: _[k.key] ?? k.value ?? !1,
      tooltip: k.tooltip,
      onToggle: h,
      disabled: i
    },
    k.key
  )) });
}
const We = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n(
  "path",
  {
    d: "M2 4l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) }), Fe = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n(
  "path",
  {
    d: "M2 6l3 3 5-5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) });
function Te(e) {
  return e.length ? "options" in e[0] ? e : [{ label: null, options: e }] : [];
}
function ot({
  /* data */
  options: e = [],
  value: t = [],
  onChange: r,
  /* behaviour */
  searchable: a = !0,
  disabled: i = !1,
  /* translatable UI strings */
  placeholder: s = "Select options",
  searchPlaceholder: l = "Search…",
  noResultsText: o = "No results found",
  clearAllLabel: u = "Clear all",
  removeLabel: d = "Remove",
  className: h = ""
}) {
  const [p, _] = C(!1), [N, k] = C(""), [m, f] = C(-1), y = H(null), x = H(null), I = H(null), L = q(() => Te(e), [e]), D = q(
    () => L.flatMap(($) => $.options ?? []),
    [L]
  ), w = q(() => {
    const $ = N.trim().toLowerCase();
    return $ ? L.map((b) => ({
      ...b,
      options: (b.options ?? []).filter(
        (j) => j.label.toLowerCase().includes($)
      )
    })).filter((b) => b.options.length > 0) : L;
  }, [L, N]), v = q(
    () => w.flatMap(($) => $.options ?? []),
    [w]
  ), S = A(() => {
    i || (_(!0), f(-1), requestAnimationFrame(() => {
      var $;
      return ($ = x.current) == null ? void 0 : $.focus();
    }));
  }, [i]), E = A(() => {
    _(!1), k(""), f(-1);
  }, []);
  P(() => {
    if (!p) return;
    function $(b) {
      y.current && !y.current.contains(b.target) && E();
    }
    return document.addEventListener("pointerdown", $), () => document.removeEventListener("pointerdown", $);
  }, [p, E]);
  const T = A(
    ($) => {
      if (i) return;
      const b = t.includes($) ? t.filter((j) => j !== $) : [...t, $];
      r == null || r(b);
    },
    [i, t, r]
  ), U = A(
    ($, b) => {
      b.stopPropagation(), r == null || r(t.filter((j) => j !== $));
    },
    [t, r]
  ), Y = A(
    ($) => {
      $.stopPropagation(), r == null || r([]);
    },
    [r]
  ), R = A(
    ($) => {
      var b;
      return ((b = D.find((j) => j.value === $)) == null ? void 0 : b.label) ?? String($);
    },
    [D]
  ), K = A(
    ($) => {
      var b;
      if (!p) {
        ["Enter", " ", "ArrowDown"].includes($.key) && ($.preventDefault(), S());
        return;
      }
      switch ($.key) {
        case "Escape":
          $.preventDefault(), E(), (b = y.current) == null || b.focus();
          break;
        case "ArrowDown":
          $.preventDefault(), f((j) => Math.min(j + 1, v.length - 1));
          break;
        case "ArrowUp":
          $.preventDefault(), f((j) => Math.max(j - 1, 0));
          break;
        case "Enter":
          $.preventDefault(), m >= 0 && v[m] && T(v[m].value);
          break;
      }
    },
    [p, S, E, v, m, T]
  );
  P(() => {
    if (m < 0 || !I.current) return;
    const $ = I.current.querySelector(`[data-idx="${m}"]`);
    $ == null || $.scrollIntoView({ block: "nearest" });
  }, [m]);
  const V = [
    "nxp-ms",
    p ? "nxp-ms--open" : "",
    i ? "nxp-ms--disabled" : "",
    h
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "div",
    {
      ref: y,
      className: V,
      tabIndex: i ? -1 : 0,
      role: "combobox",
      "aria-expanded": p,
      "aria-haspopup": "listbox",
      "aria-disabled": i || void 0,
      onKeyDown: K,
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: "nxp-ms__trigger",
            onClick: p ? E : S,
            "aria-label": "Open select",
            children: [
              /* @__PURE__ */ c("div", { className: "nxp-ms__tags-wrap", children: [
                t.length === 0 && /* @__PURE__ */ n("span", { className: "nxp-ms__placeholder", children: s }),
                t.map(($) => /* @__PURE__ */ c("span", { className: "nxp-ms__tag", children: [
                  /* @__PURE__ */ n("span", { className: "nxp-ms__tag-label", children: R($) }),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: "nxp-ms__tag-remove",
                      onPointerDown: (b) => U($, b),
                      "aria-label": `${d} ${R($)}`,
                      tabIndex: -1,
                      children: "×"
                    }
                  )
                ] }, $))
              ] }),
              /* @__PURE__ */ c("div", { className: "nxp-ms__trigger-end", children: [
                t.length > 0 && !i && /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: "nxp-ms__clear",
                    onPointerDown: Y,
                    "aria-label": u,
                    tabIndex: -1,
                    children: "×"
                  }
                ),
                /* @__PURE__ */ n(
                  "span",
                  {
                    className: `nxp-ms__chevron${p ? " nxp-ms__chevron--up" : ""}`,
                    children: /* @__PURE__ */ n(We, {})
                  }
                )
              ] })
            ]
          }
        ),
        p && /* @__PURE__ */ c("div", { className: "nxp-ms__dropdown", children: [
          a && /* @__PURE__ */ n("div", { className: "nxp-ms__search-wrap", children: /* @__PURE__ */ n(
            "input",
            {
              ref: x,
              type: "text",
              className: "nxp-ms__search",
              value: N,
              placeholder: l,
              "aria-label": l,
              onChange: ($) => {
                k($.target.value), f(-1);
              },
              onKeyDown: ($) => {
                ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes($.key) && ($.preventDefault(), K($));
              }
            }
          ) }),
          /* @__PURE__ */ c(
            "div",
            {
              ref: I,
              className: "nxp-ms__list",
              role: "listbox",
              "aria-multiselectable": "true",
              children: [
                w.length === 0 && /* @__PURE__ */ n("div", { className: "nxp-ms__empty", role: "status", children: o }),
                (() => {
                  let $ = 0;
                  return w.map((b) => /* @__PURE__ */ c(
                    "div",
                    {
                      className: "nxp-ms__group",
                      children: [
                        b.label && /* @__PURE__ */ n("div", { className: "nxp-ms__group-label", "aria-label": b.label, children: b.label }),
                        (b.options ?? []).map((j) => {
                          const M = $++, B = t.includes(j.value), g = m === M, W = j.disabled ?? !1;
                          return /* @__PURE__ */ c(
                            "div",
                            {
                              "data-idx": M,
                              className: [
                                "nxp-ms__option",
                                B ? "nxp-ms__option--selected" : "",
                                g ? "nxp-ms__option--focused" : "",
                                W ? "nxp-ms__option--disabled" : ""
                              ].filter(Boolean).join(" "),
                              role: "option",
                              "aria-selected": B,
                              "aria-disabled": W || void 0,
                              onPointerDown: (O) => {
                                O.preventDefault(), W || T(j.value);
                              },
                              onMouseEnter: () => !W && f(M),
                              children: [
                                /* @__PURE__ */ n("span", { className: "nxp-ms__option-label", children: j.label }),
                                B && /* @__PURE__ */ n("span", { className: "nxp-ms__option-check", children: /* @__PURE__ */ n(Fe, {}) })
                              ]
                            },
                            j.value
                          );
                        })
                      ]
                    },
                    b.label ?? "__ungrouped"
                  ));
                })()
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Pe = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("rect", { x: "4.5", y: "1.5", width: "8", height: "9", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
  /* @__PURE__ */ n("path", { d: "M1.5 4.5H3v7A1.5 1.5 0 0 0 4.5 13H10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
] }), Re = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 7l4 4 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
function it({
  value: e = "",
  label: t,
  hint: r,
  disabled: a = !1,
  /* translatable */
  copyText: i = "Copy",
  copiedText: s = "Copied!",
  copyLabel: l = "Copy to clipboard",
  className: o = ""
}) {
  const [u, d] = C(!1), h = A(async () => {
    if (!(a || !e)) {
      try {
        await navigator.clipboard.writeText(e);
      } catch {
        const _ = document.createElement("textarea");
        _.value = e, _.style.position = "fixed", _.style.opacity = "0", document.body.appendChild(_), _.select(), document.execCommand("copy"), document.body.removeChild(_);
      }
      d(!0), setTimeout(() => d(!1), 2e3);
    }
  }, [a, e]), p = [
    "nxp-copy",
    a ? "nxp-copy--disabled" : "",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: p, children: [
    t && /* @__PURE__ */ n("label", { className: "nxp-copy__label", children: t }),
    /* @__PURE__ */ c("div", { className: "nxp-copy__wrap", children: [
      /* @__PURE__ */ n(
        "input",
        {
          type: "text",
          className: "nxp-copy__input",
          value: e,
          readOnly: !0,
          "aria-label": t ?? "Copy value",
          disabled: a
        }
      ),
      /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          className: `nxp-copy__btn${u ? " nxp-copy__btn--copied" : ""}`,
          onClick: h,
          disabled: a,
          "aria-label": l,
          title: l,
          children: [
            u ? /* @__PURE__ */ n(Re, {}) : /* @__PURE__ */ n(Pe, {}),
            /* @__PURE__ */ n("span", { children: u ? s : i })
          ]
        }
      )
    ] }),
    r && /* @__PURE__ */ n("span", { className: "nxp-copy__hint", children: r })
  ] });
}
const Oe = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M4 2l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), He = () => /* @__PURE__ */ c("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("path", { d: "M1.5 6.5L7 1.5l5.5 5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("path", { d: "M3 5.5V12a.5.5 0 0 0 .5.5h2.75V9h1.5v3.5H10.5A.5.5 0 0 0 11 12V5.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })
] });
function lt({
  items: e = [],
  separator: t,
  // custom separator node — defaults to ChevronIcon
  showHome: r = !1,
  // prepend a home icon on first item
  className: a = ""
}) {
  const i = ["nxp-bc", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("nav", { className: i, "aria-label": "Breadcrumb", children: /* @__PURE__ */ n("ol", { className: "nxp-bc__list", role: "list", children: e.map((s, l) => {
    const o = l === e.length - 1, u = l === 0, d = s.icon ?? (r && u ? /* @__PURE__ */ n(He, {}) : null);
    return /* @__PURE__ */ c("li", { className: "nxp-bc__item", children: [
      !o && (s.href ? /* @__PURE__ */ c("a", { href: s.href, className: "nxp-bc__link", children: [
        d && /* @__PURE__ */ n("span", { className: "nxp-bc__icon", children: d }),
        s.label
      ] }) : /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          className: "nxp-bc__link nxp-bc__link--btn",
          onClick: s.onClick,
          children: [
            d && /* @__PURE__ */ n("span", { className: "nxp-bc__icon", children: d }),
            s.label
          ]
        }
      )),
      o && /* @__PURE__ */ c("span", { className: "nxp-bc__current", "aria-current": "page", children: [
        d && /* @__PURE__ */ n("span", { className: "nxp-bc__icon", children: d }),
        s.label
      ] }),
      !o && /* @__PURE__ */ n("span", { className: "nxp-bc__sep", "aria-hidden": "true", children: t ?? /* @__PURE__ */ n(Oe, {}) })
    ] }, l);
  }) }) });
}
function ct({
  children: e,
  onConfirm: t,
  /* text — all translatable */
  message: r = "Are you sure?",
  confirmText: a = "Yes, confirm",
  cancelText: i = "Cancel",
  /* styling */
  variant: s = "error",
  // 'error' | 'warning' | 'primary'
  confirmVariant: l,
  // defaults to same as variant
  size: o = "md",
  // 'sm' | 'md'
  disabled: u = !1,
  /* timing */
  autoResetMs: d = 0,
  // auto-cancel confirmation after N ms (0 = never)
  className: h = ""
}) {
  const [p, _] = C(!1), N = H(null);
  function k() {
    u || (_(!0), d > 0 && (N.current = setTimeout(() => _(!1), d)));
  }
  function m() {
    clearTimeout(N.current), _(!1), t == null || t();
  }
  function f() {
    clearTimeout(N.current), _(!1);
  }
  P(() => () => clearTimeout(N.current), []);
  const y = l ?? s, x = o === "sm" ? " nxp-confirm--sm" : "";
  return p ? /* @__PURE__ */ c("div", { className: `nxp-confirm nxp-confirm--inline${x} ${h}`, role: "group", "aria-label": "Confirm action", children: [
    /* @__PURE__ */ n("span", { className: "nxp-confirm__message", children: r }),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: `nxp-confirm__ok nxp-confirm__ok--${y}`,
        onClick: m,
        autoFocus: !0,
        children: a
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-confirm__cancel",
        onClick: f,
        children: i
      }
    )
  ] }) : /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      className: [`nxp-btn nxp-btn--${s}`, x, h].filter(Boolean).join(" "),
      onClick: k,
      disabled: u,
      children: e
    }
  );
}
const Ue = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 6h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }), Ke = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M6 2v8M2 6h8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) });
function dt({
  value: e,
  defaultValue: t = 0,
  onChange: r,
  min: a,
  max: i,
  step: s = 1,
  precision: l,
  // decimal places — inferred from step if omitted
  label: o,
  prefix: u,
  suffix: d,
  hint: h,
  error: p,
  disabled: _ = !1,
  readOnly: N = !1,
  className: k = "",
  /* translatable */
  increaseLabel: m = "Increase",
  decreaseLabel: f = "Decrease"
}) {
  var M;
  const y = e !== void 0, [x, I] = C(t), [L, D] = C(""), [w, v] = C(!1), S = y ? e : x, E = l ?? (s % 1 !== 0 ? ((M = String(s).split(".")[1]) == null ? void 0 : M.length) ?? 0 : 0);
  function T(B) {
    return isNaN(B) ? S : (a !== void 0 && (B = Math.max(a, B)), i !== void 0 && (B = Math.min(i, B)), E > 0 ? parseFloat(B.toFixed(E)) : Math.round(B));
  }
  function U(B) {
    const g = T(B);
    y || I(g), r == null || r(g);
  }
  const Y = A(() => U(Number(S) + s), [S, s]), R = A(() => U(Number(S) - s), [S, s]);
  function K(B) {
    B.key === "ArrowUp" && (B.preventDefault(), Y()), B.key === "ArrowDown" && (B.preventDefault(), R());
  }
  const V = a !== void 0 && Number(S) <= a, $ = i !== void 0 && Number(S) >= i, b = [
    "nxp-num",
    p ? "nxp-num--error" : "",
    _ ? "nxp-num--disabled" : "",
    k
  ].filter(Boolean).join(" "), j = w ? L : String(S ?? "");
  return /* @__PURE__ */ c("div", { className: b, children: [
    o && /* @__PURE__ */ n("label", { className: "nxp-num__label", children: o }),
    /* @__PURE__ */ c("div", { className: "nxp-num__wrap", children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-num__step nxp-num__step--dec",
          onClick: R,
          disabled: _ || N || V,
          "aria-label": f,
          tabIndex: -1,
          children: /* @__PURE__ */ n(Ue, {})
        }
      ),
      /* @__PURE__ */ c("div", { className: "nxp-num__field", children: [
        u && /* @__PURE__ */ n("span", { className: "nxp-num__prefix", children: u }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            className: "nxp-num__input",
            value: j,
            disabled: _,
            readOnly: N,
            "aria-label": o ?? "Number input",
            "aria-invalid": !!p,
            onFocus: () => {
              v(!0), D(String(S ?? ""));
            },
            onChange: (B) => D(B.target.value),
            onBlur: () => {
              v(!1);
              const B = parseFloat(L);
              U(isNaN(B) ? S : B);
            },
            onKeyDown: K
          }
        ),
        d && /* @__PURE__ */ n("span", { className: "nxp-num__suffix", children: d })
      ] }),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-num__step nxp-num__step--inc",
          onClick: Y,
          disabled: _ || N || $,
          "aria-label": m,
          tabIndex: -1,
          children: /* @__PURE__ */ n(Ke, {})
        }
      )
    ] }),
    h && !p && /* @__PURE__ */ n("span", { className: "nxp-num__hint", children: h }),
    p && /* @__PURE__ */ n("span", { className: "nxp-num__error", role: "alert", children: p })
  ] });
}
function pt({
  length: e = 6,
  value: t,
  // controlled: string of digits/chars
  onChange: r,
  // (fullString) => void
  defaultValue: a = "",
  type: i = "number",
  // 'number' | 'text' | 'password'
  disabled: s = !1,
  autoFocus: l = !1,
  separator: o,
  // insert a dash/dot after this index (e.g. 3 → "XXX-XXX")
  separatorChar: u = "–",
  /* translatable */
  inputLabel: d = "OTP digit",
  // aria-label prefix per input
  className: h = ""
}) {
  const p = t !== void 0, [_, N] = C(() => {
    const D = (p ? t : a) ?? "";
    return Array.from({ length: e }, (w, v) => D[v] ?? "");
  });
  P(() => {
    p && N(Array.from({ length: e }, (D, w) => (t ?? "")[w] ?? ""));
  }, [p, t, e]);
  const k = H([]);
  function m(D) {
    var w, v;
    (w = k.current[D]) == null || w.focus(), (v = k.current[D]) == null || v.select();
  }
  const f = A((D) => {
    p || N(D), r == null || r(D.join(""));
  }, [p, r]);
  function y(D, w) {
    const S = w.target.value.slice(-1);
    if (i === "number" && S !== "" && !/^\d$/.test(S)) return;
    const E = [..._];
    E[D] = S, f(E), S && D < e - 1 && m(D + 1);
  }
  function x(D, w) {
    if (w.key === "Backspace") {
      if (_[D]) {
        const v = [..._];
        v[D] = "", f(v);
      } else if (D > 0) {
        const v = [..._];
        v[D - 1] = "", f(v), m(D - 1);
      }
    }
    w.key === "ArrowLeft" && D > 0 && m(D - 1), w.key === "ArrowRight" && D < e - 1 && m(D + 1);
  }
  function I(D) {
    D.preventDefault();
    const w = D.clipboardData.getData("text").replace(/\D/g, i === "number" ? "" : void 0).slice(0, e);
    if (!w) return;
    const v = Array.from({ length: e }, (S, E) => w[E] ?? "");
    f(v), m(Math.min(w.length, e - 1));
  }
  const L = ["nxp-otp", s ? "nxp-otp--disabled" : "", h].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: L, role: "group", "aria-label": "OTP input", children: Array.from({ length: e }, (D, w) => /* @__PURE__ */ c(Ne.Fragment, { children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: (v) => {
          k.current[w] = v;
        },
        type: i === "number" ? "tel" : i,
        inputMode: i === "number" ? "numeric" : "text",
        pattern: i === "number" ? "[0-9]*" : void 0,
        maxLength: 1,
        className: "nxp-otp__input",
        value: _[w],
        disabled: s,
        autoFocus: l && w === 0,
        "aria-label": `${d} ${w + 1}`,
        onChange: (v) => y(w, v),
        onKeyDown: (v) => x(w, v),
        onPaste: I,
        onFocus: (v) => v.target.select()
      }
    ),
    o && w === o - 1 && /* @__PURE__ */ n("span", { className: "nxp-otp__sep", "aria-hidden": "true", children: u })
  ] }, w)) });
}
const Ye = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("circle", { cx: "4.5", cy: "3.5", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "4.5", cy: "7", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "4.5", cy: "10.5", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "9.5", cy: "3.5", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "9.5", cy: "7", r: "1", fill: "currentColor" }),
  /* @__PURE__ */ n("circle", { cx: "9.5", cy: "10.5", r: "1", fill: "currentColor" })
] });
function ut({
  items: e = [],
  onChange: t,
  renderItem: r,
  disabled: a = !1,
  className: i = "",
  /* translatable */
  dragHandleLabel: s = "Drag to reorder"
}) {
  const [l, o] = C(null), [u, d] = C(null), h = A((m, f) => {
    o(m), f.dataTransfer.effectAllowed = "move", f.dataTransfer.setData("text/plain", String(m));
  }, []), p = A((m, f) => {
    f.preventDefault(), f.dataTransfer.dropEffect = "move", m !== u && d(m);
  }, [u]), _ = A((m) => {
    if (l === null || l === m) {
      o(null), d(null);
      return;
    }
    const f = [...e], [y] = f.splice(l, 1);
    f.splice(m, 0, y), t == null || t(f), o(null), d(null);
  }, [l, e, t]), N = A(() => {
    o(null), d(null);
  }, []), k = ["nxp-sortable", a ? "nxp-sortable--disabled" : "", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: k, role: "list", children: e.map((m, f) => {
    const y = l === f, x = u === f && l !== null && l !== f, I = x && l > f, L = x && l < f;
    return /* @__PURE__ */ c(
      "div",
      {
        role: "listitem",
        className: [
          "nxp-sortable__item",
          y ? "nxp-sortable__item--dragging" : "",
          I ? "nxp-sortable__item--over-top" : "",
          L ? "nxp-sortable__item--over-bottom" : ""
        ].filter(Boolean).join(" "),
        draggable: !a,
        onDragStart: (D) => h(f, D),
        onDragOver: (D) => p(f, D),
        onDrop: () => _(f),
        onDragEnd: N,
        "aria-roledescription": "sortable item",
        children: [
          !a && /* @__PURE__ */ n(
            "span",
            {
              className: "nxp-sortable__handle",
              "aria-label": s,
              title: s,
              children: /* @__PURE__ */ n(Ye, {})
            }
          ),
          /* @__PURE__ */ n("div", { className: "nxp-sortable__content", children: r ? r(m, f) : /* @__PURE__ */ n("span", { className: "nxp-sortable__label", children: m.label ?? m.id }) })
        ]
      },
      m.id ?? f
    );
  }) });
}
const Ve = () => /* @__PURE__ */ c("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("path", { d: "M14 18V10M14 10l-3.5 3.5M14 10l3.5 3.5", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("rect", { x: "2", y: "2", width: "24", height: "24", rx: "6", stroke: "currentColor", strokeWidth: "1.4", strokeDasharray: "4 3" })
] }), qe = () => /* @__PURE__ */ c("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("path", { d: "M13 2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-7Z", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" }),
  /* @__PURE__ */ n("path", { d: "M13 2v7h7", stroke: "currentColor", strokeWidth: "1.4", strokeLinejoin: "round" })
] }), Je = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 2l8 8M10 2l-8 8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }), ze = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("circle", { cx: "7", cy: "7", r: "5.5", stroke: "currentColor", strokeWidth: "1.3" }),
  /* @__PURE__ */ n("path", { d: "M4 7c0-1.66 1.34-3 3-3a3 3 0 0 1 2.83 2M7 10a3 3 0 0 1-2.83-2", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
  /* @__PURE__ */ n("path", { d: "M7 4.5v5", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
] });
function he(e) {
  return e < 1024 ? `${e} B` : e < 1048576 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`;
}
function Ge(e) {
  if (typeof e == "string") return /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/i.test(e);
  const t = (e == null ? void 0 : e.type) ?? (e == null ? void 0 : e.mime_type) ?? "", r = (e == null ? void 0 : e.name) ?? (e == null ? void 0 : e.filename) ?? "";
  return t.startsWith("image/") || /\.(jpe?g|png|gif|webp|svg|avif)$/i.test(r);
}
function Xe(e) {
  return typeof e == "string" ? e : e != null && e.url ? e.url : e instanceof File ? URL.createObjectURL(e) : "";
}
function Ze(e) {
  return typeof e == "string" ? e.split("/").pop() : (e == null ? void 0 : e.filename) ?? (e == null ? void 0 : e.name) ?? (e == null ? void 0 : e.url) ?? "file";
}
function ht({
  value: e = [],
  // File[] | WPMedia[] | string[]
  onChange: t,
  accept: r = "*/*",
  multiple: a = !1,
  maxSize: i,
  // bytes
  maxFiles: s,
  disabled: l = !1,
  showPreview: o = !0,
  /* WP Media integration */
  wpMedia: u = !1,
  wpMediaTitle: d = "Select Media",
  wpMediaButton: h = "Use this media",
  wpMediaType: p,
  // 'image' | 'video' | undefined
  /* translatable */
  dropText: _ = "Drag & drop files here, or",
  browseText: N = "Browse",
  wpMediaText: k = "Media Library",
  maxSizeText: m,
  removeFileLabel: f = "Remove file",
  errorSizeText: y = (L, D) => `"${L}" exceeds the ${he(D)} limit`,
  errorMaxText: x = (L) => `Maximum ${L} file(s) allowed`,
  className: I = ""
}) {
  const L = H(null), [D, w] = C(!1), [v, S] = C([]), E = A(() => {
    var j;
    if (!((j = window.wp) != null && j.media)) return;
    const b = window.wp.media({
      title: d,
      button: { text: h },
      multiple: a,
      library: p ? { type: p } : void 0
    });
    b.on("select", () => {
      const M = b.state().get("selection").toJSON(), B = a ? [...e, ...M].slice(0, s ?? 1 / 0) : [M[0]];
      t == null || t(B);
    }), b.open();
  }, [e, a, s, d, h, p, t]), T = A((b) => {
    const j = Array.from(b), M = [], B = j.filter((O) => i && O.size > i ? (M.push(y(O.name, i)), !1) : !0), g = a ? [...e, ...B] : [B[0]].filter(Boolean), W = s ? g.slice(0, s) : g;
    s && g.length > s && M.push(x(s)), S(M), W.length && (t == null || t(W));
  }, [e, a, s, i, y, x, t]), U = (b) => {
    b.preventDefault(), w(!0);
  }, Y = () => w(!1), R = (b) => {
    b.preventDefault(), w(!1), l || T(b.dataTransfer.files);
  }, K = (b) => {
    T(b.target.files), b.target.value = "";
  }, V = (b) => t == null ? void 0 : t(e.filter((j, M) => M !== b)), $ = [
    "nxp-upload__zone",
    D ? "nxp-upload__zone--over" : "",
    l ? "nxp-upload__zone--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: ["nxp-upload", I].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: $,
        onDragOver: U,
        onDragLeave: Y,
        onDrop: R,
        onClick: () => {
          var b;
          return !l && !u && ((b = L.current) == null ? void 0 : b.click());
        },
        "aria-label": "File upload area",
        children: [
          /* @__PURE__ */ n(Ve, {}),
          /* @__PURE__ */ n("span", { className: "nxp-upload__drop-text", children: _ }),
          /* @__PURE__ */ c("div", { className: "nxp-upload__actions", children: [
            u && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                className: "nxp-upload__browse nxp-upload__browse--wp",
                onClick: (b) => {
                  b.stopPropagation(), l || E();
                },
                disabled: l,
                children: [
                  /* @__PURE__ */ n(ze, {}),
                  k
                ]
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: "nxp-upload__browse",
                onClick: (b) => {
                  var j;
                  b.stopPropagation(), l || (j = L.current) == null || j.click();
                },
                disabled: l,
                children: N
              }
            )
          ] }),
          m && /* @__PURE__ */ n("span", { className: "nxp-upload__hint", children: m }),
          /* @__PURE__ */ n(
            "input",
            {
              ref: L,
              type: "file",
              accept: r,
              multiple: a,
              style: { display: "none" },
              onChange: K,
              disabled: l
            }
          )
        ]
      }
    ),
    v.map((b, j) => /* @__PURE__ */ n("p", { className: "nxp-upload__error", role: "alert", children: b }, j)),
    o && e.length > 0 && /* @__PURE__ */ n("div", { className: "nxp-upload__preview", children: e.map((b, j) => {
      const M = Ge(b), B = Xe(b), g = Ze(b), W = b instanceof File ? he(b.size) : null;
      return /* @__PURE__ */ c("div", { className: "nxp-upload__item", children: [
        /* @__PURE__ */ n("div", { className: "nxp-upload__item-thumb", children: M ? /* @__PURE__ */ n("img", { src: B, alt: g, className: "nxp-upload__item-img" }) : /* @__PURE__ */ n(qe, {}) }),
        /* @__PURE__ */ c("div", { className: "nxp-upload__item-info", children: [
          /* @__PURE__ */ n("span", { className: "nxp-upload__item-name", children: g }),
          W && /* @__PURE__ */ n("span", { className: "nxp-upload__item-size", children: W })
        ] }),
        !l && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: "nxp-upload__item-remove",
            onClick: () => V(j),
            "aria-label": `${f}: ${g}`,
            children: /* @__PURE__ */ n(Je, {})
          }
        )
      ] }, j);
    }) })
  ] });
}
function le(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function Qe(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.substring(0, 2), 16) || 0,
    parseInt(t.substring(2, 4), 16) || 0,
    parseInt(t.substring(4, 6), 16) || 0
  ];
}
function en(e, t, r) {
  return "#" + [e, t, r].map((a) => le(Math.round(a), 0, 255).toString(16).padStart(2, "0")).join("");
}
function nn(e, t, r) {
  e /= 255, t /= 255, r /= 255;
  const a = Math.max(e, t, r), i = Math.min(e, t, r), s = a - i;
  let l = 0;
  return s > 0 && (a === e ? l = ((t - r) / s + (t < r ? 6 : 0)) / 6 : a === t ? l = ((r - e) / s + 2) / 6 : l = ((e - t) / s + 4) / 6), [l * 360, a === 0 ? 0 : s / a, a];
}
function re(e, t, r) {
  e /= 360;
  const a = Math.floor(e * 6), i = e * 6 - a, s = r * (1 - t), l = r * (1 - i * t), o = r * (1 - (1 - i) * t), u = [[r, o, s], [l, r, s], [s, r, o], [s, l, r], [o, s, r], [r, s, l]], [d, h, p] = u[a % 6];
  return [d * 255, h * 255, p * 255];
}
function ee(e) {
  return nn(...Qe(e));
}
function fe(e, t, r) {
  return en(...re(e, t, r));
}
function ne(e) {
  return /^#[0-9A-Fa-f]{6}$/.test(e);
}
const tn = [
  "#000000",
  "#ffffff",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#6b7280",
  "#1e40af",
  "#065f46",
  "#7c2d12",
  "#1e3a5f",
  "#4a044e"
];
function ft({
  value: e,
  defaultValue: t = "#1E40AF",
  onChange: r,
  swatches: a = tn,
  // pass [] to hide
  showAlpha: i = !1,
  disabled: s = !1,
  /* translatable */
  hexLabel: l = "Hex color",
  alphaLabel: o = "Opacity",
  className: u = ""
}) {
  const d = e !== void 0, h = d ? e : t, [p, _] = C(() => ee(ne(h) ? h : "#1E40AF")), [N, k] = C(1), [m, f] = C(h), [y, x] = C(!1), I = H(null), L = H(null), D = H(!1), w = q(() => fe(...p), [p]);
  P(() => {
    d && ne(e) && e.toLowerCase() !== w.toLowerCase() && (_(ee(e)), f(e));
  }, [d, e]);
  const v = A((M, B, g, W = N) => {
    const O = fe(M, B, g);
    d || _([M, B, g]), f(O), r == null || r(i ? { hex: O, alpha: W } : O);
  }, [d, N, i, r]);
  P(() => {
    if (!y) return;
    const M = (B) => {
      var g;
      (g = I.current) != null && g.contains(B.target) || x(!1);
    };
    return document.addEventListener("pointerdown", M), () => document.removeEventListener("pointerdown", M);
  }, [y]);
  function S(M) {
    const B = L.current.getBoundingClientRect(), g = le((M.clientX - B.left) / B.width, 0, 1), W = le(1 - (M.clientY - B.top) / B.height, 0, 1);
    return [g, W];
  }
  function E(M) {
    D.current = !0, M.currentTarget.setPointerCapture(M.pointerId);
    const [B, g] = S(M);
    v(p[0], B, g);
  }
  function T(M) {
    if (!D.current) return;
    const [B, g] = S(M);
    v(p[0], B, g);
  }
  function U() {
    D.current = !1;
  }
  function Y(M) {
    const B = M.target.value;
    f(B);
    const g = B.startsWith("#") ? B : "#" + B;
    if (ne(g)) {
      const [W, O, G] = ee(g);
      _([W, O, G]), r == null || r(i ? { hex: g, alpha: N } : g);
    }
  }
  function R() {
    const M = m.startsWith("#") ? m : "#" + m;
    ne(M) || f(w);
  }
  const K = `hsl(${p[0]}, 100%, 50%)`, V = `${p[1] * 100}%`, $ = `${(1 - p[2]) * 100}%`, b = i ? `rgba(${re(...p).map(Math.round).join(",")},${N})` : w, j = ["nxp-cpicker", s ? "nxp-cpicker--disabled" : "", u].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { ref: I, className: j, children: [
    /* @__PURE__ */ c(
      "button",
      {
        type: "button",
        className: "nxp-cpicker__trigger",
        style: { "--swatch": b },
        onClick: () => !s && x((M) => !M),
        "aria-label": `Color picker, current: ${w}`,
        "aria-expanded": y,
        disabled: s,
        children: [
          /* @__PURE__ */ n("span", { className: "nxp-cpicker__trigger-swatch" }),
          /* @__PURE__ */ n("span", { className: "nxp-cpicker__trigger-hex", children: w.toUpperCase() }),
          /* @__PURE__ */ n("span", { className: "nxp-cpicker__trigger-caret", "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    y && /* @__PURE__ */ c("div", { className: "nxp-cpicker__panel", children: [
      /* @__PURE__ */ c(
        "div",
        {
          ref: L,
          className: "nxp-cpicker__gradient",
          style: { background: K },
          onPointerDown: E,
          onPointerMove: T,
          onPointerUp: U,
          children: [
            /* @__PURE__ */ n("div", { className: "nxp-cpicker__gradient-white" }),
            /* @__PURE__ */ n("div", { className: "nxp-cpicker__gradient-black" }),
            /* @__PURE__ */ n(
              "div",
              {
                className: "nxp-cpicker__thumb",
                style: { left: V, top: $, background: w }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ c("div", { className: "nxp-cpicker__sliders", children: [
        /* @__PURE__ */ n(
          "input",
          {
            type: "range",
            className: "nxp-cpicker__hue",
            min: 0,
            max: 360,
            step: 1,
            value: Math.round(p[0]),
            onChange: (M) => v(Number(M.target.value), p[1], p[2]),
            "aria-label": "Hue"
          }
        ),
        i && /* @__PURE__ */ n("div", { className: "nxp-cpicker__alpha-wrap", children: /* @__PURE__ */ n(
          "input",
          {
            type: "range",
            className: "nxp-cpicker__alpha",
            min: 0,
            max: 100,
            step: 1,
            value: Math.round(N * 100),
            onChange: (M) => {
              const B = Number(M.target.value) / 100;
              k(B), r == null || r({ hex: w, alpha: B });
            },
            "aria-label": o,
            style: {
              "--alpha-start": `rgba(${re(...p).map(Math.round).join(",")},0)`,
              "--alpha-end": `rgba(${re(...p).map(Math.round).join(",")},1)`
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ c("div", { className: "nxp-cpicker__hex-row", children: [
        /* @__PURE__ */ n("div", { className: "nxp-cpicker__preview", style: { background: b } }),
        /* @__PURE__ */ c("div", { className: "nxp-cpicker__hex-wrap", children: [
          /* @__PURE__ */ n("span", { className: "nxp-cpicker__hex-hash", children: "#" }),
          /* @__PURE__ */ n(
            "input",
            {
              type: "text",
              className: "nxp-cpicker__hex-input",
              value: m.replace("#", "").toUpperCase(),
              maxLength: 6,
              onChange: Y,
              onBlur: R,
              "aria-label": l
            }
          )
        ] }),
        i && /* @__PURE__ */ c("div", { className: "nxp-cpicker__alpha-val", children: [
          Math.round(N * 100),
          "%"
        ] })
      ] }),
      a.length > 0 && /* @__PURE__ */ n("div", { className: "nxp-cpicker__swatches", children: a.map((M) => /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: `nxp-cpicker__swatch${M.toLowerCase() === w.toLowerCase() ? " nxp-cpicker__swatch--active" : ""}`,
          style: { background: M },
          onClick: () => {
            const [B, g, W] = ee(M);
            _([B, g, W]), f(M), r == null || r(i ? { hex: M, alpha: N } : M);
          },
          "aria-label": M,
          title: M
        },
        M
      )) })
    ] })
  ] });
}
function _e(e) {
  return String(e).padStart(2, "0");
}
function se(e) {
  return e ? `${e.getFullYear()}-${_e(e.getMonth() + 1)}-${_e(e.getDate())}` : "";
}
function X(e) {
  if (!e) return null;
  const [t, r, a] = e.split("-").map(Number);
  if (!t || !r || !a) return null;
  const i = new Date(t, r - 1, a);
  return isNaN(i) ? null : i;
}
function me(e, t) {
  return e && t && e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function oe(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function rn(e, t) {
  const r = new Date(e, t, 1).getDay(), a = new Date(e, t + 1, 0).getDate(), i = new Date(e, t, 0).getDate(), s = [];
  for (let o = r - 1; o >= 0; o--)
    s.push({ d: i - o, month: t - 1, year: t === 0 ? e - 1 : e, outside: !0 });
  for (let o = 1; o <= a; o++)
    s.push({ d: o, month: t, year: e, outside: !1 });
  const l = 42 - s.length;
  for (let o = 1; o <= l; o++)
    s.push({ d: o, month: t + 1, year: t === 11 ? e + 1 : e, outside: !0 });
  return s;
}
const an = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), sn = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M5 2l4 5-4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), on = () => /* @__PURE__ */ c("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("rect", { x: "1.5", y: "2.5", width: "11", height: "10", rx: "1.5", stroke: "currentColor", strokeWidth: "1.3" }),
  /* @__PURE__ */ n("path", { d: "M1.5 5.5h11M4.5 1v3M9.5 1v3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
] }), ln = () => /* @__PURE__ */ n("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M1 1l9 9M10 1L1 10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }) });
function _t({
  value: e,
  // ISO string 'YYYY-MM-DD' (controlled)
  defaultValue: t,
  // ISO string (uncontrolled)
  onChange: r,
  // (isoString | null) => void
  minDate: a,
  // ISO string
  maxDate: i,
  // ISO string
  disabled: s = !1,
  clearable: l = !0,
  /* translatable */
  placeholder: o = "Select date",
  todayText: u = "Today",
  clearText: d = "Clear",
  monthNames: h = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  dayNames: p = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  prevMonthLabel: _ = "Previous month",
  nextMonthLabel: N = "Next month",
  className: k = ""
}) {
  const m = e !== void 0, [f, y] = C(() => X(t)), [x, I] = C(!1), [L, D] = C(() => (X(e ?? t) ?? /* @__PURE__ */ new Date()).getFullYear()), [w, v] = C(() => (X(e ?? t) ?? /* @__PURE__ */ new Date()).getMonth()), S = H(null), E = m ? X(e) : f, T = q(() => X(a), [a]), U = q(() => X(i), [i]);
  P(() => {
    if (!x) return;
    const g = (W) => {
      var O;
      (O = S.current) != null && O.contains(W.target) || I(!1);
    };
    return document.addEventListener("pointerdown", g), () => document.removeEventListener("pointerdown", g);
  }, [x]);
  const Y = A((g) => {
    const W = new Date(g.year, g.month, g.d);
    m || y(W), r == null || r(se(W)), I(!1);
  }, [m, r]), R = A((g) => {
    g.stopPropagation(), m || y(null), r == null || r(null);
  }, [m, r]);
  function K() {
    w === 0 ? (v(11), D((g) => g - 1)) : v((g) => g - 1);
  }
  function V() {
    w === 11 ? (v(0), D((g) => g + 1)) : v((g) => g + 1);
  }
  const $ = q(() => rn(L, w), [L, w]), b = oe(/* @__PURE__ */ new Date());
  function j(g) {
    const W = new Date(g.year, g.month, g.d);
    return !!(T && W < oe(T) || U && W > oe(U));
  }
  const M = E ? se(E) : "", B = ["nxp-date", s ? "nxp-date--disabled" : "", x ? "nxp-date--open" : "", k].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { ref: S, className: B, children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "nxp-date__trigger",
        onClick: () => !s && I((g) => !g),
        role: "button",
        "aria-label": o,
        "aria-expanded": x,
        tabIndex: s ? -1 : 0,
        onKeyDown: (g) => {
          (g.key === "Enter" || g.key === " ") && (g.preventDefault(), !s && I((W) => !W));
        },
        children: [
          /* @__PURE__ */ n("span", { className: "nxp-date__icon", children: /* @__PURE__ */ n(on, {}) }),
          /* @__PURE__ */ n("span", { className: `nxp-date__value${M ? "" : " nxp-date__value--placeholder"}`, children: M || o }),
          l && E && !s && /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__clear", onClick: R, "aria-label": d, children: /* @__PURE__ */ n(ln, {}) })
        ]
      }
    ),
    x && /* @__PURE__ */ c("div", { className: "nxp-date__popover", role: "dialog", "aria-label": "Date picker", children: [
      /* @__PURE__ */ c("div", { className: "nxp-date__header", children: [
        /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__nav", onClick: K, "aria-label": _, children: /* @__PURE__ */ n(an, {}) }),
        /* @__PURE__ */ c("span", { className: "nxp-date__month-label", children: [
          h[w],
          " ",
          L
        ] }),
        /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__nav", onClick: V, "aria-label": N, children: /* @__PURE__ */ n(sn, {}) })
      ] }),
      /* @__PURE__ */ n("div", { className: "nxp-date__grid nxp-date__grid--head", children: p.map((g) => /* @__PURE__ */ n("span", { className: "nxp-date__dow", children: g }, g)) }),
      /* @__PURE__ */ n("div", { className: "nxp-date__grid", children: $.map((g, W) => {
        const O = new Date(g.year, g.month, g.d), G = me(O, E), Q = me(O, b), F = j(g);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: [
              "nxp-date__day",
              g.outside ? "nxp-date__day--outside" : "",
              G ? "nxp-date__day--selected" : "",
              Q ? "nxp-date__day--today" : "",
              F ? "nxp-date__day--disabled" : ""
            ].filter(Boolean).join(" "),
            onClick: () => !F && Y(g),
            disabled: F,
            "aria-label": se(O),
            "aria-selected": G,
            "aria-current": Q ? "date" : void 0,
            children: g.d
          },
          W
        );
      }) }),
      /* @__PURE__ */ n("div", { className: "nxp-date__footer", children: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: "nxp-date__today-btn",
          onClick: () => Y({ d: b.getDate(), month: b.getMonth(), year: b.getFullYear() }),
          children: u
        }
      ) })
    ] })
  ] });
}
function xe(e) {
  return String(e).padStart(2, "0");
}
function Z(e) {
  return e ? `${e.getFullYear()}-${xe(e.getMonth() + 1)}-${xe(e.getDate())}` : "";
}
function te(e) {
  if (!e) return null;
  const [t, r, a] = e.split("-").map(Number);
  if (!t || !r || !a) return null;
  const i = new Date(t, r - 1, a);
  return isNaN(i) ? null : i;
}
function ie(e, t) {
  return e && t && e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function ae(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function cn(e, t, r) {
  const a = ae(e), i = ae(t), s = ae(r);
  return a > i && a < s;
}
function dn(e, t) {
  const r = new Date(e, t, 1).getDay(), a = new Date(e, t + 1, 0).getDate(), i = new Date(e, t, 0).getDate(), s = [];
  for (let o = r - 1; o >= 0; o--)
    s.push({ d: i - o, month: t - 1, year: t === 0 ? e - 1 : e, outside: !0 });
  for (let o = 1; o <= a; o++)
    s.push({ d: o, month: t, year: e, outside: !1 });
  const l = 42 - s.length;
  for (let o = 1; o <= l; o++)
    s.push({ d: o, month: t + 1, year: t === 11 ? e + 1 : e, outside: !0 });
  return s;
}
const pn = () => /* @__PURE__ */ n("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), un = () => /* @__PURE__ */ n("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M5 2l4 5-4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), hn = () => /* @__PURE__ */ c("svg", { width: "13", height: "13", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: [
  /* @__PURE__ */ n("rect", { x: "1.5", y: "2.5", width: "11", height: "10", rx: "1.5", stroke: "currentColor", strokeWidth: "1.3" }),
  /* @__PURE__ */ n("path", { d: "M1.5 5.5h11M4.5 1v3M9.5 1v3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
] }), fn = () => /* @__PURE__ */ n("svg", { width: "10", height: "10", viewBox: "0 0 11 11", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M1 1l9 9M10 1L1 10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }) }), _n = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 7h10M8 3l4 4-4 4", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }) });
function ve({
  year: e,
  month: t,
  start: r,
  end: a,
  hovered: i,
  onDayClick: s,
  onDayHover: l,
  prevMonth: o,
  nextMonth: u,
  showPrev: d = !0,
  showNext: h = !0,
  monthNames: p,
  dayNames: _,
  prevLabel: N,
  nextLabel: k
}) {
  const m = q(() => dn(e, t), [e, t]), f = ae(/* @__PURE__ */ new Date()), y = a ?? i;
  return /* @__PURE__ */ c("div", { className: "nxp-drp__cal", children: [
    /* @__PURE__ */ c("div", { className: "nxp-drp__cal-header", children: [
      d ? /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__nav", onClick: o, "aria-label": N, children: /* @__PURE__ */ n(pn, {}) }) : /* @__PURE__ */ n("span", {}),
      /* @__PURE__ */ c("span", { className: "nxp-date__month-label", children: [
        p[t],
        " ",
        e
      ] }),
      h ? /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__nav", onClick: u, "aria-label": k, children: /* @__PURE__ */ n(un, {}) }) : /* @__PURE__ */ n("span", {})
    ] }),
    /* @__PURE__ */ n("div", { className: "nxp-date__grid nxp-date__grid--head", children: _.map((x) => /* @__PURE__ */ n("span", { className: "nxp-date__dow", children: x }, x)) }),
    /* @__PURE__ */ n("div", { className: "nxp-date__grid", children: m.map((x, I) => {
      const L = new Date(x.year, x.month, x.d), D = ie(L, r), w = ie(L, a), v = ie(L, f), S = r && y && !x.outside && cn(L, r < y ? r : y, r < y ? y : r);
      return /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: [
            "nxp-date__day",
            x.outside ? "nxp-date__day--outside" : "",
            D ? "nxp-date__day--selected nxp-date__day--range-start" : "",
            w ? "nxp-date__day--selected nxp-date__day--range-end" : "",
            v ? "nxp-date__day--today" : "",
            S ? "nxp-date__day--in-range" : ""
          ].filter(Boolean).join(" "),
          onClick: () => s(L),
          onMouseEnter: () => l(L),
          "aria-label": Z(L),
          "aria-selected": D || w,
          children: x.d
        },
        I
      );
    }) })
  ] });
}
function mt({
  value: e,
  // { start: 'YYYY-MM-DD', end: 'YYYY-MM-DD' } (controlled)
  defaultValue: t,
  // same shape (uncontrolled)
  onChange: r,
  // ({ start, end }) => void
  disabled: a = !1,
  clearable: i = !0,
  /* translatable */
  startPlaceholder: s = "Start date",
  endPlaceholder: l = "End date",
  clearText: o = "Clear",
  applyText: u = "Apply",
  monthNames: d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  dayNames: h = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  prevMonthLabel: p = "Previous month",
  nextMonthLabel: _ = "Next month",
  className: N = ""
}) {
  const k = e !== void 0, m = te((k ? e == null ? void 0 : e.start : t == null ? void 0 : t.start) ?? null), f = te((k ? e == null ? void 0 : e.end : t == null ? void 0 : t.end) ?? null), [y, x] = C(m), [I, L] = C(f), [D, w] = C(null), [v, S] = C("start"), [E, T] = C(!1), [U, Y] = C(() => (m ?? /* @__PURE__ */ new Date()).getFullYear()), [R, K] = C(() => (m ?? /* @__PURE__ */ new Date()).getMonth()), V = H(null);
  P(() => {
    k && (x(te((e == null ? void 0 : e.start) ?? null)), L(te((e == null ? void 0 : e.end) ?? null)));
  }, [k, e == null ? void 0 : e.start, e == null ? void 0 : e.end]), P(() => {
    if (!E) return;
    const F = (J) => {
      var z;
      (z = V.current) != null && z.contains(J.target) || T(!1);
    };
    return document.addEventListener("pointerdown", F), () => document.removeEventListener("pointerdown", F);
  }, [E]);
  const $ = R === 11 ? 0 : R + 1, b = R === 11 ? U + 1 : U;
  function j() {
    R === 0 ? (K(11), Y((F) => F - 1)) : K((F) => F - 1);
  }
  function M() {
    R === 11 ? (K(0), Y((F) => F + 1)) : K((F) => F + 1);
  }
  const B = A((F) => {
    if (v === "start" || y && I)
      x(F), L(null), S("end");
    else {
      let J = y, z = F;
      z < J && (J = F, z = y), L(z), S("start"), w(null);
      const we = { start: Z(J), end: Z(z) };
      k || (x(J), L(z)), r == null || r(we), T(!1);
    }
  }, [v, y, I, k, r]), g = A((F) => {
    v === "end" && y && !I && w(F);
  }, [v, y, I]);
  function W(F) {
    F.stopPropagation(), x(null), L(null), S("start"), r == null || r({ start: null, end: null });
  }
  const O = y ? Z(y) : "", G = I ? Z(I) : "", Q = ["nxp-drp", a ? "nxp-drp--disabled" : "", E ? "nxp-drp--open" : "", N].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { ref: V, className: Q, children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "nxp-drp__trigger",
        onClick: () => !a && T((F) => !F),
        role: "button",
        "aria-expanded": E,
        tabIndex: a ? -1 : 0,
        onKeyDown: (F) => {
          (F.key === "Enter" || F.key === " ") && (F.preventDefault(), !a && T((J) => !J));
        },
        children: [
          /* @__PURE__ */ n("span", { className: "nxp-date__icon", children: /* @__PURE__ */ n(hn, {}) }),
          /* @__PURE__ */ n("span", { className: `nxp-drp__segment${O ? "" : " nxp-date__value--placeholder"}`, children: O || s }),
          /* @__PURE__ */ n("span", { className: "nxp-drp__arrow", children: /* @__PURE__ */ n(_n, {}) }),
          /* @__PURE__ */ n("span", { className: `nxp-drp__segment${G ? "" : " nxp-date__value--placeholder"}`, children: G || l }),
          i && (y || I) && !a && /* @__PURE__ */ n("button", { type: "button", className: "nxp-date__clear", onClick: W, "aria-label": o, children: /* @__PURE__ */ n(fn, {}) })
        ]
      }
    ),
    E && /* @__PURE__ */ n("div", { className: "nxp-drp__popover", role: "dialog", "aria-label": "Date range picker", children: /* @__PURE__ */ c("div", { className: "nxp-drp__calendars", children: [
      /* @__PURE__ */ n(
        ve,
        {
          year: U,
          month: R,
          start: y,
          end: I,
          hovered: D,
          onDayClick: B,
          onDayHover: g,
          prevMonth: j,
          nextMonth: () => {
          },
          showPrev: !0,
          showNext: !1,
          monthNames: d,
          dayNames: h,
          prevLabel: p,
          nextLabel: _
        }
      ),
      /* @__PURE__ */ n(
        ve,
        {
          year: b,
          month: $,
          start: y,
          end: I,
          hovered: D,
          onDayClick: B,
          onDayHover: g,
          prevMonth: () => {
          },
          nextMonth: M,
          showPrev: !1,
          showNext: !0,
          monthNames: d,
          dayNames: h,
          prevLabel: p,
          nextLabel: _
        }
      )
    ] }) })
  ] });
}
const mn = () => /* @__PURE__ */ n("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M1 1l12 12M13 1L1 13", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }) });
function xt({
  open: e = !1,
  onClose: t,
  placement: r = "right",
  size: a = "md",
  title: i,
  byline: s,
  footer: l,
  closeOnBackdrop: o = !0,
  closeOnEscape: u = !0,
  hideClose: d = !1,
  className: h = "",
  children: p
}) {
  const _ = H(null);
  P(() => {
    if (!e) return;
    const m = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = m;
    };
  }, [e]);
  const N = A(
    (m) => {
      m.key === "Escape" && u && t && t();
    },
    [t, u]
  );
  if (P(() => {
    if (e)
      return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [e, N]), P(() => {
    if (!e) return;
    const m = setTimeout(() => {
      var y;
      const f = (y = _.current) == null ? void 0 : y.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      f == null || f.focus();
    }, 50);
    return () => clearTimeout(m);
  }, [e]), !e) return null;
  const k = [
    "nxp-drawer__panel",
    `nxp-drawer__panel--${r}`,
    `nxp-drawer__panel--${a}`,
    h
  ].filter(Boolean).join(" ");
  return ce(
    /* @__PURE__ */ n(
      "div",
      {
        className: `nxp-drawer__backdrop nxp-drawer__backdrop--${r}`,
        onMouseDown: (m) => {
          o && m.target === m.currentTarget && t && t();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": typeof i == "string" ? i : "Drawer",
        children: /* @__PURE__ */ c("div", { className: k, ref: _, children: [
          (i || !d) && /* @__PURE__ */ c("div", { className: "nxp-drawer__head", children: [
            /* @__PURE__ */ c("div", { className: "nxp-drawer__head-text", children: [
              i && /* @__PURE__ */ n("div", { className: "nxp-drawer__title", children: i }),
              s && /* @__PURE__ */ n("div", { className: "nxp-drawer__byline", children: s })
            ] }),
            !d && t && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: "nxp-drawer__close",
                onClick: t,
                "aria-label": "Close drawer",
                children: /* @__PURE__ */ n(mn, {})
              }
            )
          ] }),
          /* @__PURE__ */ n("div", { className: "nxp-drawer__body", children: p }),
          l && /* @__PURE__ */ n("div", { className: "nxp-drawer__foot", children: l })
        ] })
      }
    ),
    document.body
  );
}
const xn = () => /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ n("path", { d: "M2 4l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
function ye({
  item: e,
  active: t,
  onSelect: r,
  collapsed: a,
  depth: i = 0
}) {
  const s = Array.isArray(e.children) && e.children.length > 0, l = s && e.children.some((_) => _.id === t), [o, u] = C(l);
  P(() => {
    l && u(!0);
  }, [l]);
  const d = e.id === t;
  function h(_) {
    _.preventDefault(), s && !a ? u((N) => !N) : r == null || r(e.id, e);
  }
  const p = [
    "nxp-sb__item",
    i > 0 ? "nxp-sb__item--child" : "",
    d ? "nxp-sb__item--active" : "",
    l ? "nxp-sb__item--active-parent" : "",
    e.disabled ? "nxp-sb__item--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("li", { children: [
    /* @__PURE__ */ c(
      "a",
      {
        href: e.href ?? "#",
        className: p,
        onClick: h,
        "aria-current": d ? "page" : void 0,
        "aria-disabled": e.disabled || void 0,
        tabIndex: e.disabled ? -1 : 0,
        title: a && typeof e.label == "string" ? e.label : void 0,
        children: [
          e.icon && /* @__PURE__ */ n("span", { className: "nxp-sb__icon", "aria-hidden": "true", children: e.icon }),
          !a && /* @__PURE__ */ n("span", { className: "nxp-sb__label", children: e.label }),
          !a && e.badge != null && /* @__PURE__ */ n("span", { className: `nxp-sb__badge${e.badgeVariant ? ` nxp-sb__badge--${e.badgeVariant}` : ""}`, children: e.badge }),
          !a && s && /* @__PURE__ */ n("span", { className: `nxp-sb__chevron${o ? " nxp-sb__chevron--open" : ""}`, children: /* @__PURE__ */ n(xn, {}) })
        ]
      }
    ),
    s && !a && o && /* @__PURE__ */ n("ul", { className: "nxp-sb__sub", role: "list", children: e.children.map((_) => /* @__PURE__ */ n(
      ye,
      {
        item: _,
        active: t,
        onSelect: r,
        collapsed: a,
        depth: i + 1
      },
      _.id
    )) })
  ] });
}
function vt({
  items: e = [],
  active: t,
  defaultActive: r,
  onSelect: a,
  collapsed: i,
  defaultCollapsed: s = !1,
  onCollapse: l,
  collapsible: o = !0,
  header: u,
  footer: d,
  width: h = "220px",
  collapsedWidth: p = "56px",
  className: _ = ""
}) {
  const N = t !== void 0, [k, m] = C(r ?? null), f = N ? t : k, y = i !== void 0, [x, I] = C(s), L = y ? i : x;
  function D(E, T) {
    N || m(E), a == null || a(E, T);
  }
  function w() {
    const E = !L;
    y || I(E), l == null || l(E);
  }
  const v = [
    "nxp-sb",
    L ? "nxp-sb--collapsed" : "",
    _
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("aside", { className: v, style: {
    "--nxp-sb-width": h,
    "--nxp-sb-col-width": p,
    width: L ? p : h
  }, "aria-label": "Sidebar navigation", children: [
    u && /* @__PURE__ */ n("div", { className: "nxp-sb__header", children: u }),
    /* @__PURE__ */ n("nav", { className: "nxp-sb__nav", children: /* @__PURE__ */ n("ul", { className: "nxp-sb__list", role: "list", children: e.map((E) => E.type === "divider" ? /* @__PURE__ */ n("li", { className: "nxp-sb__divider", role: "separator", children: !L && E.label && /* @__PURE__ */ n("span", { className: "nxp-sb__section-label", children: E.label }) }, E.id ?? E.label) : /* @__PURE__ */ n(
      ye,
      {
        item: E,
        active: f,
        onSelect: D,
        collapsed: L
      },
      E.id
    )) }) }),
    d && /* @__PURE__ */ n("div", { className: "nxp-sb__footer", children: d }),
    o && /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: "nxp-sb__toggle",
        onClick: w,
        "aria-label": L ? "Expand sidebar" : "Collapse sidebar",
        children: /* @__PURE__ */ n(
          "svg",
          {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            "aria-hidden": "true",
            style: { transform: L ? "rotate(180deg)" : "none", transition: "transform 200ms ease" },
            children: /* @__PURE__ */ n("path", { d: "M9 2L5 7l4 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        )
      }
    )
  ] });
}
const bt = "Import dist/style.css to apply Nexter UI design tokens and component styles.";
export {
  kn as Accordion,
  gn as Alert,
  yn as Avatar,
  wn as Badge,
  Dn as Banner,
  lt as Breadcrumb,
  $n as Button,
  Mn as Carousel,
  In as Checkbox,
  ft as ColorPicker,
  Ln as Combobox,
  ct as ConfirmButton,
  it as CopyInput,
  _t as DatePicker,
  mt as DateRangePicker,
  Bn as Dialog,
  xt as Drawer,
  Cn as Dropdown,
  En as EmptyState,
  at as FeatureToggleCard,
  Sn as Field,
  ht as FileUpload,
  jn as IconBox,
  An as Input,
  Wn as Kbd,
  Fn as Modal,
  ot as MultiSelect,
  Tn as Notice,
  dt as NumberInput,
  pt as OTPInput,
  Pn as Pagination,
  Rn as Popover,
  On as Progress,
  Hn as Radio,
  Un as Search,
  Kn as Segmented,
  Yn as Select,
  Vn as Sheet,
  vt as Sidebar,
  qn as Skeleton,
  Jn as Slider,
  ut as SortableList,
  zn as Spinner,
  Gn as StatCard,
  Xn as Status,
  Zn as Stepper,
  Qn as Table,
  et as Tabs,
  nt as Tag,
  tt as Textarea,
  rt as Toast,
  ge as Toggle,
  st as ToggleGrid,
  de as Tooltip,
  bt as tokens
};
