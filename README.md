This is a template for coming soon pages

First 

Install Meteor Mailchimp

```sh
meteor add miro:mailchimp
```

Add the form to the HTML

```sh
  {{> MailChimpListSubscribe}}
```


Create a *settings.json*

```sh

{
    "private": {
        "MailChimp": {
            "apiKey": "879789789946464-us4",
            "listId": "7497847984646"
        }
    }
}

```

Run meteor with the settings adjustments 

```sh

meteor --settings settings.json

```


 * [MailChimp Lists](https://github.com/MiroHibler/meteor-mailchimp-lists)