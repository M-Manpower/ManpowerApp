CREATE TABLE [dbo].[ApplicantLevel] (
    [Id]          INT            IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (50)  NOT NULL,
    [Description] NVARCHAR (MAX) NULL,
    [DateCreated] DATETIME       NULL,
    [DateUpdated] DATETIME       NOT NULL,
    [IsActive]    BIT            NOT NULL,
    CONSTRAINT [PK_ApplicantLevel] PRIMARY KEY CLUSTERED ([Id] ASC)
);

