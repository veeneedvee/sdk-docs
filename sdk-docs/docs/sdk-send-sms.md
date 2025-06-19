---
id: sdk-send-sms
title: Sending SMS with the SDK
sidebar_label: Send SMS
---

This guide shows how to use the `sendSMS()` function in different SDKs to send a text message.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="js" label="JavaScript">

  ```js
  import { sendSMS } from 'fict-sdk';

  sendSMS('+1234567890', 'Hello from JavaScript!');
  ```
</TabItem> 

<TabItem value="python" label="Python">

```python
from fict_sdk import send_sms

send_sms('+1234567890', 'Hello from Python!')
```
</TabItem> 

<TabItem value="node" label="Node.js">

```js
const sdk = require('fict-sdk');

sdk.sendSMS('+1234567890', 'Hello from Node.js!');
```
</TabItem> 

<TabItem value="php" label="PHP">

```php
<?php
require 'vendor/autoload.php';

$sdk = new FictSDK();
$sdk->sendSMS('+1234567890', 'Hello from PHP!');
?>
```
</TabItem> 
</Tabs>