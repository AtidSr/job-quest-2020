### Part B1

## Repo link

> https://github.com/AtidSr/React-Chuck-Norris

### Part B2: Architecture Design Task

- Folder Structure ที่จะใช้ในการจัดวาง

```
  .
  ├── components
  │ ├── step1.js
  │ ├── step2.js
  │ └── step3.js
  ├── action
  │ └── stepAction.js
  ├── reducer
  │ └── stepReducer.js
  ├── App.js
  └── index.js
```

- Library ที่คาดว่าจะใช้สำหรับ Project นี้ พร้อมทั้งระบุด้วยว่าทำไมถึงเลือกใช้ เช่น ใช้ lodash สำหรับการจัดการข้อมูล
  - Redux, react-redux ใช้รวม state
  - react-step-builder ใช้ทำ form step
  - styled component ใช้แต่ง style
  - axios ใช่้ส่งข้อมูล
- จะต้องจัดการ State ของข้อมูลอย่างไร เพื่อรองรับกับโจทย์นี้ได้
  - รวม state ไว้ที่ root แล้วใช้ action reducer แก้ข้อมูลใน state
- จะใช้วิธีใดในการ Validate Form สำหรับการ Save Draft และสำหรับการ Submit
  - Validate from ตอนที่ user ใส่ข้อมูลถ้าไม่ถูกไม่ให้ไป step ต่อไป
