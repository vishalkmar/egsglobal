"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShieldCheck,
  UserCog,
  User,
  Lock,
  KeyRound,
  Phone,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

type Role = "admin" | "user";
type FieldStatus = "idle" | "error" | "success";

const ACCENT = "#3bc9d9";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** ---------------- Brand mark (small icon only) ---------------- */
function BrandIcon() {
  return (
    <div
      className="h-10 w-10 rounded-2xl grid place-items-center"
      style={{
        background: `radial-gradient(circle at 30% 30%, rgba(59,201,217,0.35), rgba(59,201,217,0.10), rgba(255,255,255,0.04))`,
        boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <ShieldCheck className="h-5 w-5" style={{ color: ACCENT }} />
    </div>
  );
}

/** ---------------- Floating input (like your 2nd reference) ----------------
 * - Label + value both show properly
 * - Nice height
 * - Icon stays left, clean
 * - Accent focus ring & border
 */
function FloatingField({
  label,
  value,
  onChange,
  type = "text",
  icon: Icon,
  status = "idle",
  disabled,
  maxLength,
  inputMode,
  autoComplete,
  helper,
  errorText,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  icon: React.ElementType;
  status?: FieldStatus;
  disabled?: boolean;
  maxLength?: number;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  helper?: string;
  errorText?: string;
}) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;

  const borderColor =
    status === "error"
      ? "rgba(244,63,94,0.45)"
      : status === "success"
      ? "rgba(16,185,129,0.35)"
      : "rgba(255,255,255,0.10)";

  const focusGlow =
    status === "error"
      ? "0 0 0 4px rgba(244,63,94,0.15)"
      : status === "success"
      ? "0 0 0 4px rgba(16,185,129,0.12)"
      : `0 0 0 4px rgba(59,201,217,0.16)`;

  return (
    <div className="w-full">
      <div
        className={cn(
          "relative rounded-2xl bg-white/[0.04] backdrop-blur-md transition-all",
          "shadow-[0_1px_0_rgba(255,255,255,0.05),0_18px_55px_rgba(0,0,0,0.35)]"
        )}
        style={{
          border: `1px solid ${borderColor}`,
          boxShadow: focused
            ? `${focusGlow}, 0_18px_55px rgba(0,0,0,0.35)`
            : "0 1px 0 rgba(255,255,255,0.05), 0 18px 55px rgba(0,0,0,0.35)",
        }}
      >
        {/* left icon */}
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
          <Icon
            className={cn("h-5 w-5 transition-opacity", disabled && "opacity-60")}
            style={{ color: ACCENT, opacity: floated ? 1 : 0.9 }}
          />
        </div>

        {/* label */}
        <label
          className={cn(
            "pointer-events-none absolute left-12 transition-all duration-200",
            floated
              ? "top-3 text-[12px]"
              : "top-1/2 -translate-y-1/2 text-[14px]"
          )}
          style={{ color: "rgba(255,255,255,0.78)" }}
        >
          {label}
        </label>

        {/* input */}
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          disabled={disabled}
          maxLength={maxLength}
          inputMode={inputMode}
          autoComplete={autoComplete}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "h-16 w-full rounded-2xl border-0 bg-transparent",
            "pl-12 pr-12 pt-7 text-white text-[15px]",
            "placeholder:text-white/35",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            disabled && "opacity-60"
          )}
          placeholder={floated ? "" : ""}
        />

        {/* right status */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          {status === "error" ? (
            <AlertCircle className="h-5 w-5 text-rose-300" />
          ) : status === "success" ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-300" />
          ) : null}
        </div>
      </div>

      {/* helper / error */}
      {errorText ? (
        <div className="mt-2 text-xs text-rose-300">{errorText}</div>
      ) : helper ? (
        <div className="mt-2 text-xs text-white/55">{helper}</div>
      ) : null}
    </div>
  );
}

/** ---------------- Role selector pill ---------------- */
function RolePill({
  active,
  title,
  subtitle,
  icon: Icon,
  onClick,
}: {
  active: boolean;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative w-full rounded-2xl px-4 py-4 text-left transition-all",
        "bg-white/[0.04] hover:bg-white/[0.06]"
      )}
      style={{
        border: active
          ? `1px solid rgba(59,201,217,0.55)`
          : "1px solid rgba(255,255,255,0.10)",
        boxShadow: active ? "0 0 0 4px rgba(59,201,217,0.12)" : "none",
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="h-11 w-11 rounded-2xl grid place-items-center"
          style={{
            border: active
              ? `1px solid rgba(59,201,217,0.55)`
              : "1px solid rgba(255,255,255,0.10)",
            background: active ? "rgba(59,201,217,0.10)" : "rgba(255,255,255,0.03)",
          }}
        >
          <Icon className="h-5 w-5" style={{ color: active ? ACCENT : "rgba(255,255,255,0.70)" }} />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <div className="text-white font-semibold">{title}</div>
            <span
              className="text-xs rounded-full px-2 py-1"
              style={{
                color: active ? "white" : "rgba(255,255,255,0.65)",
                background: active ? `rgba(59,201,217,0.18)` : "rgba(255,255,255,0.06)",
                border: active
                  ? `1px solid rgba(59,201,217,0.35)`
                  : "1px solid rgba(255,255,255,0.10)",
              }}
            >
              {active ? "Selected" : "Choose"}
            </span>
          </div>
          <div className="mt-1 text-sm text-white/60">{subtitle}</div>
        </div>
      </div>
    </button>
  );
}

/** ---------------- Page ---------------- */
export default function Login() {
  // functionality same
  const [activeRole, setActiveRole] = useState<Role>("admin");

  const [adminData, setAdminData] = useState({ username: "", password: "" });

  const [userData, setUserData] = useState({
    phoneNumber: "",
    otp: "",
    otpSent: false,
  });

  // validation
  const adminErrors = useMemo(() => {
    const u = adminData.username.trim();
    const p = adminData.password;
    return {
      username:
        u.length === 0 ? "Username is required" : u.length < 3 ? "Minimum 3 characters" : "",
      password:
        p.length === 0 ? "Password is required" : p.length < 6 ? "Minimum 6 characters" : "",
    };
  }, [adminData]);

  const phoneErrors = useMemo(() => {
    const digits = userData.phoneNumber.replace(/\D/g, "");
    return {
      phoneNumber:
        digits.length === 0
          ? "Phone number is required"
          : digits.length !== 10
          ? "Enter valid 10-digit number"
          : "",
    };
  }, [userData.phoneNumber]);

  const otpErrors = useMemo(() => {
    const otp = userData.otp.trim();
    return {
      otp: otp.length === 0 ? "OTP is required" : !/^\d{6}$/.test(otp) ? "Enter 6-digit OTP" : "",
    };
  }, [userData.otp]);

  const adminStatus = {
    username: adminErrors.username ? "error" : adminData.username ? "success" : "idle",
    password: adminErrors.password ? "error" : adminData.password ? "success" : "idle",
  } satisfies Record<"username" | "password", FieldStatus>;

  const userStatus = {
    phoneNumber: phoneErrors.phoneNumber
      ? "error"
      : userData.phoneNumber
      ? "success"
      : "idle",
    otp: otpErrors.otp ? "error" : userData.otp ? "success" : "idle",
  } satisfies Record<"phoneNumber" | "otp", FieldStatus>;

  // handlers
  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminErrors.username || adminErrors.password) {
      alert("Please fix errors before submitting.");
      return;
    }
    console.log("Admin Login Data:", {
      username: adminData.username,
      password: adminData.password,
      loginType: "admin",
    });
    // Redirect to admin dashboard
    window.location.href = "/admin";
  };

  const handleUserPhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneErrors.phoneNumber) {
      alert(phoneErrors.phoneNumber);
      return;
    }
    const digits = userData.phoneNumber.replace(/\D/g, "");
    console.log("OTP Request Data:", {
      phoneNumber: digits,
      loginType: "user",
      action: "requestOTP",
    });
    setUserData((p) => ({ ...p, phoneNumber: digits, otpSent: true }));
    alert(`OTP sent to ${digits}! Check console for details. (In production, backend would send real OTP)`);
  };

  const handleUserOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpErrors.otp) {
      alert(otpErrors.otp);
      return;
    }
    console.log("User Login Data:", {
      phoneNumber: userData.phoneNumber,
      otp: userData.otp,
      loginType: "user",
      action: "verifyOTP",
    });
    alert("User Login submitted with OTP! Check console. In production, this would authenticate with backend.");
  };

  const switchRole = (role: Role) => {
    setActiveRole(role);
    // clean UX: when switching to user, keep phone typed; but if switching away, keep as is
  };

  return (
    <div className="min-h-screen bg-[#0b1116] text-white">
      {/* clean background (no grid, no extra labels) */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 18% 18%, rgba(59,201,217,0.18), transparent 48%), radial-gradient(circle at 85% 25%, rgba(59,201,217,0.10), transparent 52%), radial-gradient(circle at 50% 95%, rgba(255,255,255,0.06), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 md:py-14">
        {/* top mini brand (left) */}
        <div className="flex items-center gap-3">
          <BrandIcon />
          <div className="leading-tight">
            <div className="text-white font-semibold">EGS Group</div>
            <div className="text-xs text-white/55">Secure portal • Admin & User login</div>
          </div>
        </div>

        {/* MAIN CENTER TITLE (as you asked) */}
        <div className="mt-10 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            EGS Group
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto leading-relaxed">
            Welcome to the secure portal. Select your role and continue to login.
          </p>
        </div>

        {/* two columns WITHOUT looking like two separate bordered components */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Guidance (no hard border card) */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white/[0.03] p-7 md:p-8">
              <div className="text-2xl md:text-3xl font-semibold text-white">
                Welcome to EGS Portal
              </div>
              <div className="mt-2 text-white/70">
                A single login experience for Admin and Users. Choose your role on the right and sign
                in securely.
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="rounded-2xl p-5 bg-white/[0.03]"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-white font-semibold">For Admin</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>• Manage applications</li>
                    <li>• Verify documents</li>
                    <li>• View reports and dashboards</li>
                  </ul>
                </div>

                <div
                  className="rounded-2xl p-5 bg-white/[0.03]"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-white font-semibold">For Users</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>• OTP-based secure login</li>
                    <li>• Track request status</li>
                    <li>• Quick support access</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* (Security note removed as you asked) */}
          </div>

          {/* Right Login Area (soft, clean, no “extra” top-right text) */}
          <div className="rounded-3xl bg-white/[0.03] p-7 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-2xl font-semibold text-white">Sign in</div>
                <div className="mt-1 text-white/65">Select role and continue to login</div>
              </div>
              <div
                className="h-12 w-12 rounded-2xl grid place-items-center"
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {activeRole === "admin" ? (
                  <UserCog className="h-5 w-5" style={{ color: ACCENT }} />
                ) : (
                  <User className="h-5 w-5" style={{ color: ACCENT }} />
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              <RolePill
                active={activeRole === "admin"}
                title="Admin"
                subtitle="Username & Password"
                icon={UserCog}
                onClick={() => switchRole("admin")}
              />
              <RolePill
                active={activeRole === "user"}
                title="User"
                subtitle="Phone & OTP"
                icon={User}
                onClick={() => switchRole("user")}
              />
            </div>

            <div className="mt-6">
              <AnimatePresence mode="wait">
                {activeRole === "admin" ? (
                  <motion.div
                    key="admin"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-4"
                  >
                    <div
                      className="rounded-2xl p-4 bg-white/[0.03]"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div className="text-white font-semibold">Admin Login</div>
                      <div className="text-sm text-white/65 mt-1">
                        Enter your credentials to continue
                      </div>
                    </div>

                    <form onSubmit={handleAdminSubmit} className="space-y-4">
                      <FloatingField
                        label="Email / Username"
                        value={adminData.username}
                        onChange={(v) => setAdminData((p) => ({ ...p, username: v }))}
                        icon={User}
                        status={adminStatus.username}
                        errorText={adminErrors.username || ""}
                        autoComplete="username"
                      />

                      <FloatingField
                        label="Password"
                        value={adminData.password}
                        onChange={(v) => setAdminData((p) => ({ ...p, password: v }))}
                        icon={Lock}
                        type="password"
                        status={adminStatus.password}
                        errorText={adminErrors.password || ""}
                        autoComplete="current-password"
                      />

                      <Button
                        type="submit"
                        className="w-full h-12 rounded-2xl font-semibold text-black"
                        style={{
                          backgroundColor: "white",
                        }}
                      >
                        Login as Admin
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>

                      <div
                        className="rounded-2xl p-4 text-sm text-white/70"
                        style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                      >
                        Demo Credentials: <span className="text-white">admin</span> /{" "}
                        <span className="text-white">password123</span>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="user"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-4"
                  >
                    <div
                      className="rounded-2xl p-4 bg-white/[0.03]"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div className="text-white font-semibold">User Login</div>
                      <div className="text-sm text-white/65 mt-1">
                        Sign in using phone and OTP verification
                      </div>
                    </div>

                    <form
                      onSubmit={userData.otpSent ? handleUserOtpSubmit : handleUserPhoneSubmit}
                      className="space-y-4"
                    >
                      <AnimatePresence mode="wait">
                        {!userData.otpSent ? (
                          <motion.div
                            key="phone"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                          >
                            <FloatingField
                              label="Phone Number"
                              value={userData.phoneNumber}
                              onChange={(v) => setUserData((p) => ({ ...p, phoneNumber: v }))}
                              icon={Phone}
                              status={userStatus.phoneNumber}
                              errorText={phoneErrors.phoneNumber || ""}
                              helper={!phoneErrors.phoneNumber ? "OTP will be sent to your registered number" : ""}
                              inputMode="numeric"
                              maxLength={14}
                              autoComplete="tel"
                            />

                            <Button
                              type="submit"
                              className="w-full h-12 rounded-2xl font-semibold text-black"
                              style={{ backgroundColor: "white" }}
                            >
                              Send OTP
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="otp"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                          >
                            <FloatingField
                              label="Phone Number"
                              value={userData.phoneNumber}
                              onChange={() => {}}
                              icon={Phone}
                              disabled
                              status="success"
                            />

                            <FloatingField
                              label="Enter OTP"
                              value={userData.otp}
                              onChange={(v) =>
                                setUserData((p) => ({
                                  ...p,
                                  otp: v.replace(/\D/g, "").slice(0, 6),
                                }))
                              }
                              icon={KeyRound}
                              status={userStatus.otp}
                              errorText={otpErrors.otp || ""}
                              helper={!otpErrors.otp ? `OTP sent to ${userData.phoneNumber}` : ""}
                              inputMode="numeric"
                              maxLength={6}
                              autoComplete="one-time-code"
                            />

                            <Button
                              type="submit"
                              className="w-full h-12 rounded-2xl font-semibold text-black"
                              style={{ backgroundColor: "white" }}
                            >
                              Verify & Login
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button
                              type="button"
                              variant="outline"
                              className="w-full h-12 rounded-2xl border-white/15 text-white hover:bg-white/[0.06]"
                              onClick={() => setUserData({ phoneNumber: "", otp: "", otpSent: false })}
                            >
                              Change Phone Number
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-7 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="text-sm text-white/65 text-center">Don’t have an account?</div>
              <a
                href="/contact"
                className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold"
                style={{ color: "white" }}
              >
                Contact us to register <ArrowRight className="h-4 w-4" style={{ color: ACCENT }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
