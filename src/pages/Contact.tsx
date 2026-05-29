import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Seo } from '../components/common/Seo';

const contactInfo = [
  { icon: Phone, label: '服务热线', value: '18926096868', subValue: '工作日 8:00-18:00' },
  { icon: Mail, label: '电子邮箱', value: 'contact@jingfanshuo.com', subValue: '24小时内回复' },
  { icon: MapPin, label: '公司地址', value: '深圳市宝安区沙井街道壆岗社区壆岗大道文体中心商业楼2、3栋611', subValue: '欢迎莅临参观' },
  { icon: Clock, label: '营业时间', value: '周一至周五 8:30-17:30', subValue: '周末及节假日休息' },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        alert('感谢您的留言！我们会尽快与您联系。');
        setFormData({ name: '', company: '', phone: '', email: '', message: '' });
      } else {
        throw new Error('提交失败');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('表单提交错误:', error);
      alert('提交失败，请稍后重试或直接拨打服务热线。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="联系我们"
        description="联系深圳市晶凡硕新材料科技有限公司，获取专业的建材咨询和服务支持。服务热线：18926096868"
        keywords={['联系我们', '联系方式', '在线留言', '深圳建材', '晶凡硕', '服务热线']}
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
            <p className="text-gray-600 text-lg">如有任何疑问或需求，请随时联系我们</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">联系方式</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                      <p className="text-gray-900 font-medium">{item.value}</p>
                      <p className="text-gray-500 text-sm">{item.subValue}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">在线留言</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">姓名 *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">公司名称</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      placeholder="请输入公司名称"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">联系电话 *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      placeholder="请输入联系电话"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">电子邮箱</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      placeholder="请输入电子邮箱"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">留言内容 *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none"
                    placeholder="请描述您的需求或问题..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-primary hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {isSubmitting ? '提交中...' : '提交留言'}
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">地图位置</h2>
            <div className="bg-white rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>深圳市宝安区沙井街道壆岗社区壆岗大道文体中心商业楼2、3栋611</p>
                <p className="text-sm">欢迎莅临参观指导</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
