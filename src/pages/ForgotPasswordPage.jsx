import { Link } from 'react-router-dom'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-14 px-4">
      <div className="bg-white rounded p-8 border-0 w-full" style={{ maxWidth: '380px', boxShadow: '0 1rem 3rem rgba(0,0,0,.175)' }}>
        <h4 className="text-center mb-6 font-bold content-title block mx-auto">استعادة كلمة المرور</h4>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full border border-primary text-primary bg-transparent rounded py-2 text-sm font-medium hover:bg-primary hover:text-white"
            >
              إرسال رابط دعوة
            </button>
          </div>
          <p className="text-center text-sm mb-0">
            تذكرت كلمة المرور؟{' '}
            <Link to="/login" className="text-primary hover:underline">
              تسجيل الدخول
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
