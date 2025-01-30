'use client'
import { Form, Input, Button, Checkbox, Radio } from "antd";
import { useState } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { Send } from "lucide-react";
import Image from 'next/image'
export default function CallbackPhone() {
  const [form] = Form.useForm();
  const [selectedMessenger, setSelectedMessenger] = useState("whatsapp");

  return (
    <div className="text-white p-6 w-[565px] bg-black bg-opacity-40 rounded-xl shadow-lg mt-6">
      <h2 className="text-center text-2xl font-extrabold">
        ПЕРЕЗВАНИВАЕМ <br /> <span className="text-yellow-400 ">ЗА 10-15 МИНУТ</span>
        <br /> В РАБОЧИЕ ЧАСЫ
      </h2>

      <Form layout="vertical" form={form} className="mt-6">
       
        <Form.Item label={<span className="text-white">Ваше имя</span>} name="name">
          <Input placeholder="Например Иван" className="p-5 rounded-lg  text-black placeholder-gray-400" />
        </Form.Item>

        
        <Form.Item label={<span className="text-white">Ваш номер</span>} name="phone">
          <Input placeholder="+7 (___) ___-__-__" className="p-5 rounded-lg border-gray-500 text-black placeholder-gray-400" />
        </Form.Item>

        
        <Form.Item label={<span className=" text-white">Удобный для связи мессенджер</span>}>
        <div className="flex flex-1 space-x-10">
        <Image src='/whats.svg' alt='phone' width={147} height={57} />
        <Image src='/teleg.svg' alt='phone' width={147} height={57} />
        <Image src='/phone1.svg' alt='phone' width={147} height={57} />
        </div>
        </Form.Item>
        
        
        <Form.Item label={<span className="text-white">Ваш комментарий</span>} name="comment">
          <Input.TextArea placeholder="Введите текст" className="p-3 rounded-lg  border border-gray-500 text-black placeholder-gray-400" rows={3} />
        </Form.Item>

        {/* Чекбокс с согласием */}
        <Form.Item name="agreement" valuePropName="checked">
          <Checkbox className="text-white">
            Подтверждаю свои данные и даю согласие на их обработку.
          </Checkbox>
        </Form.Item>

        {/* Кнопка отправки */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full p-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg">
            Получить предложение
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
