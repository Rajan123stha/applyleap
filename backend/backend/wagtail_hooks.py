from wagtail import hooks

@hooks.register('insert_global_admin_css')
def add_custom_logo():
    print("Wagtail hooks file loaded")
    return '''
        <style>
            .wagtail-branding__logo {
                background-image: url("/static/images/logo.png") !important;
                background-size: contain;
                background-repeat: no-repeat;
                height: 30px;  /* Adjust to fit your logo */
                width: 150px;  /* Adjust to fit your logo */
            }
        </style>
    '''
