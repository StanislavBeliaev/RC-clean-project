# 🚀 Быстрый старт RC2App

Следуйте этим шагам для быстрого запуска проекта.

## ✅ Что уже настроено

- ✅ React Native 0.82.1 (без Expo)
- ✅ TypeScript с строгими правилами
- ✅ ESLint + Prettier для форматирования кода
- ✅ Babel с алиасами путей (@components, @screens и т.д.)
- ✅ Готовая структура папок
- ✅ Базовые UI компоненты (Button, Card, TextInput)
- ✅ API сервис
- ✅ Утилиты и константы
- ✅ Настроенные скрипты NPM

## 📋 Предварительные требования

### Для всех платформ:
- Node.js >= 20
- npm или yarn
- React Native CLI: `npm install -g react-native-cli`

### Для Android:
- Android Studio
- Android SDK
- JDK 17+
- Android emulator или физическое устройство

### Для iOS (только macOS):
- Xcode (последняя версия)
- CocoaPods: `sudo gem install cocoapods`
- iOS Simulator или физическое устройство

## 🏃 Запуск за 3 шага

### Шаг 1: Установка зависимостей

```bash
npm install
```

### Шаг 2 (только для iOS): Установка pods

```bash
cd ios && pod install && cd ..
```

### Шаг 3: Запуск приложения

#### Android:
```bash
# Терминал 1: Metro bundler
npm start

# Терминал 2: Запуск на Android
npm run android
```

#### iOS (только macOS):
```bash
# Терминал 1: Metro bundler
npm start

# Терминал 2: Запуск на iOS
npm run ios
```

## 🛠 Полезные команды

```bash
# Запуск Metro bundler
npm start

# Запуск на Android
npm run android

# Запуск на iOS
npm run ios

# Проверка кода (ESLint)
npm run lint

# Автоисправление ESLint ошибок
npm run lint:fix

# Форматирование кода (Prettier)
npm run format

# Проверка типов TypeScript
npm run type-check

# Запуск тестов
npm test

# Очистка кеша Metro
npm run reset-cache

# Очистка и переустановка зависимостей
npm run clean
```

## 📱 Первый запуск

После запуска приложения вы увидите HomeScreen с:
- Приветственным сообщением
- Карточками с информацией о проекте
- Примерами использования компонентов

## 📝 Следующие шаги

### 1. Создайте свой первый компонент

Создайте файл `src/components/MyComponent.tsx`:

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
```

Экспортируйте в `src/components/index.ts`:
```typescript
export * from './MyComponent';
```

Используйте:
```typescript
import { MyComponent } from '@components';

<MyComponent title="Привет!" />
```

### 2. Добавьте навигацию (опционально)

```bash
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context

# Для iOS
cd ios && pod install && cd ..
```

Подробности в `src/navigation/README.md`

### 3. Настройте API endpoint

Отредактируйте `src/services/api.ts`:
```typescript
const API_BASE_URL = 'https://your-api.com';
```

### 4. Добавьте environment variables

Установите react-native-config:
```bash
npm install react-native-config
```

Создайте `.env` файл (используйте `.env.example` как шаблон)

### 5. Кастомизируйте стили

Отредактируйте константы в `src/utils/constants.ts`:
```typescript
export const COLORS = {
  primary: '#007AFF',  // ваш цвет
  secondary: '#5856D6', // ваш цвет
  // ...
};
```

## 🐛 Решение проблем

### Проблема: Metro bundler не запускается
```bash
npm run reset-cache
```

### Проблема: Ошибки сборки Android
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Проблема: Ошибки сборки iOS
```bash
cd ios
pod deintegrate
pod install
cd ..
npm run ios
```

### Проблема: Ошибки с node_modules
```bash
npm run clean
```

## 📚 Документация

- [README.md](./README.md) - Основная документация
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Структура проекта
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Правила контрибуции

## 💡 Советы

1. **Используйте алиасы путей**: `@components` вместо `../../../components`
2. **Следуйте ESLint правилам**: запускайте `npm run lint` перед коммитом
3. **Форматируйте код**: настройте автоформатирование в вашем редакторе
4. **Проверяйте типы**: запускайте `npm run type-check` регулярно
5. **Используйте константы**: не хардкодьте цвета и размеры

## 🎉 Готово!

Ваш проект готов к разработке. Удачного кодирования!

---

Вопросы? Создайте issue в репозитории или обратитесь к документации.

