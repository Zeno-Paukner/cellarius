from django import forms

from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Div, Submit, Row, Column, Field


STATES = (
    ('', 'Choose...'),
    ('MG', 'Minas Gerais'),
    ('SP', 'Sao Paulo'),
    ('RJ', 'Rio de Janeiro')
)

KI = (
    ('', 'Wählen...'),
    ('GPTN125', 'EleutherAI/gpt-neo-125M'),
    ('GPTN13', 'EleutherAI/gpt-neo-1.3B'),
    ('GPTN27', 'EleutherAI/gpt-neo-2.7B'),
    ('GPTJ', 'EleutherAI/gpt-j-6B'),
    ('GPT2', 'gpt2'),
    ('GPT2G', 'dbmdz/german-gpt2'),
    ('GERPT2', 'benjamin/gerpt2-large')
)


class AddressForm(forms.Form):
    email = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Emails'}))
    password = forms.CharField(widget=forms.PasswordInput())
    address_1 = forms.CharField(label='Address', widget=forms.TextInput(attrs={'placeholder': '1234 Main St'}))
    address_2 = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Apartment, studio, or floor'}))
    city = forms.CharField()
    ki = forms.ChoiceField(choices=KI)
    zip_code = forms.CharField(label='Zip')
    check_me_out = forms.BooleanField(required=False)


class CrispyAddressForm(AddressForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.layout = Layout(
            Row(
                Column('email', css_class='form-group col-md-6 mb-0'),
                Column('password', css_class='form-group col-md-6 mb-0'),
                css_class='form-row'
            ),
            'address_1',
            'address_2',
            Row(
                Column('city', css_class='form-group col-md-6 mb-0'),
                Column('state', css_class='form-group col-md-4 mb-0'),
                Column('zip_code', css_class='form-group col-md-2 mb-0'),
                css_class='form-row'
            ),
            'check_me_out',
            Submit('submit', 'Sign in')
        )


class CustomCheckbox(Field):
    template = 'custom_checkbox.html'


class CustomFieldForm(AddressForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.layout = Layout(
            Row(
                Column('email', css_class='form-group col-md-6 mb-0'),
                Column('password', css_class='form-group col-md-6 mb-0'),
                css_class='form-row'
            ),
            'address_1',
            'address_2',
            Row(
                Column('city', css_class='form-group col-md-6 mb-0'),
                Column('state', css_class='form-group col-md-4 mb-0'),
                Column('zip_code', css_class='form-group col-md-2 mb-0'),
                css_class='form-row'
            ),
            CustomCheckbox('check_me_out'),
            Submit('submit', 'Sign in')
        )
