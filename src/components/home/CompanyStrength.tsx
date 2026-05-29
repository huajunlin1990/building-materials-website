import { motion } from 'framer-motion';
import { Shield, Users, Truck, Headphones } from 'lucide-react';
import { companyStrengths } from '../../data/mockData';
import { Section } from '../common/Section';

const iconMap: Record<string, typeof Shield> = {
  Shield,
  Users,
  Truck,
  Headphones,
};

export const CompanyStrength = () => {
  return (
    <Section className="bg-gradient-to-b from-white to-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section.Header
          label="核心优势"
          title="为什么选择晶凡硕"
          subtitle="专业、可靠、创新的新材料解决方案提供商"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyStrengths.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Shield;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-card transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
